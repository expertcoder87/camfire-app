class Api::Gm::GamesController < Shared::GamesController
  def index
    if params[:shared_to_market] == 'true'
      @games = Game.where(shared_to_market: true)
      @games = @games.where.not(created_by_id: current_user.id)
      downloaded_games = Game.where(gm_id: current_user.id).map(&:parent_id)
      @games = @games.where.not(id: downloaded_games)
    else
      @games = current_user.games_as_gm
    end
    render :json=> @games
  end

  def download_game
    begin
      @old_game = Game.find_by(id: params[:game][:id])
      @new_game = @old_game.amoeba_dup
      @new_game.gm_id = current_user.id
      @new_game.shared_to_market = false
      @new_game.parent_id = @old_game.id
      if @new_game.save
        @new_game.characters.each do |character|
          character.inventories.each do |inventory|
            inventory.inventory_items.each do  |item|
              old_thing = Thing.find(item.thing_id)
              new_thing = Thing.where(name: old_thing.name, game_id: @new_game.id).first
              item.thing_id = new_thing.id
              item.save
            end
          end

          old_character = Character.where(name: character.name, game_id: @old_game.id).first
          Action.where(character_id: old_character.id).each do |old_action|
            new_action = old_action.dup
            if old_action.target_type == "Attribute"
              old_attribute = Attribute.find(old_action.target_id)
              new_action.target_id = Attribute.where(name: old_attribute.name, game_id: @new_game.id).first.id
              new_action.character_id = character.id
              new_action.save()
            elsif old_action.target_type == "Skill"
              old_skill = Skill.find(old_action.target_id)
              new_action.target_id = Skill.where(name: old_skill.name, game_id: @new_game.id).first.id
              new_action.character_id = character.id
              new_action.save()
            end
          end
        end


        # @old_game.game_attributes.each do |attribute|
        #   if old_action = Action.where(target_type:"Attribute", target_id: attribute.id).first
        #     new_action = old_action.dup
        #     new_action.target_id = Attribute.where(name: attribute.name, game_id: @new_game.id).first.id
        #     old_character = Character.find(old_action.character_id)
        #     new_action.character_id = Character.where(name: old_character.name, game_id: @new_game.id).first.id
        #     new_action.save()
        #   end
        # end
        #
        # @old_game.skills.each do |skill|
        #   if old_action = Action.where(target_type:"Skill", target_id: skill.id).first
        #     new_action = old_action.dup
        #     new_action.target_id = Skill.where(name: skill.name, game_id: @new_game.id).first.id
        #     old_character = Character.find(old_action.character_id)
        #     new_action.character_id = Character.where(name: old_character.name, game_id: @new_game.id).first.id
        #     new_action.save()
        #   end
        # end

        render json: @new_game, status: :ok
      else
        render json: {:message => "Can't Download game!"}
      end
    rescue => e
      render json: {:message => e.message}
    end
  end
end
