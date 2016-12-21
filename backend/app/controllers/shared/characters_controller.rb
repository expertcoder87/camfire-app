class Shared::CharactersController < ApplicationController
  respond_to :json

  def index

    if params[:ids]
      begin
        render json: Character.find(params[:ids])
      rescue => e
        render json: []
      end
    elsif params[:name] and params[:game_id]
      @characters = Character.where('game_id = ? and lower(name) = ?',params[:game_id], params[:name].downcase)
      render json: @characters
    elsif params[:game_id]
      @characters = Character.where(game_id: params[:game_id])
      @characters = @characters.where(user_id: nil) if params[:assigned] == "false"
      render json: @characters
    else
      @characters = Character.all
      render json: @characters
    end
  end

  def show
    begin
      @character = Character.find(params[:id])
      render json: @character
    rescue => e
      render json: []
    end
  end

  def destroy
    begin
      if params[:ids]
        Character.where(:id => params[:ids]).destroy_all
      end
      render json: 'deleted boy!!'
    rescue => e
      render json: 'not ok boy!!'
    end
  end

  def update
    begin
      @character = Character.find(params[:id])
      if params[:character][:user_id]
        existing_character = Character.find_by(user_id: character_params[:user_id], game_id: @character.game_id)
        existing_character.update(user_id: nil) if existing_character
      end
      if @character.update_attributes(character_params)
		    $client.publish "/notifications", {character: CharacterSerializer.new(@character).as_json}.to_json
        render json: @character
      else
        render json: ""
      end
    rescue => e
      render json: []
    end
  end

  def create
    begin
      @character =  Character.create(character_params)
      if @character.save!
        render json: @character
      end
    rescue => e
      render json: []
    end
    end

  private
    def character_params
      params.require(:character).permit(:name, :description, :type, :gifts, :faults, :currency, :available,
        :user_id, :game_id, :available_currency_ammount, :armour_cap_value,
        :fp,:xp, :hp_current_value, :hp_cap_value, :armour_current_value,:character_type)
    end
end
