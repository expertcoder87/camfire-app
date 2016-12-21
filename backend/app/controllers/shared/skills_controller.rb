class Shared::SkillsController < ApplicationController

  def show
    begin
      @skill = Skill.find(params[:id])
      render json: @skill
    rescue =>e
      render json: []
    end
  end

  def index
    if params[:ids]
      begin
        render json: Skill.find(params[:ids])
      rescue => e
        render json: []
      end
    elsif params[:character_id]
      @character=Character.find(params[:character_id])
      @assignedSkills = Action.where(character_id:params[:character_id], target_type:'Skill').pluck(:target_id)
      if @assignedSkills.empty?
        render json: Skill.where(game_id: @character.game_id)
      else
        render json: Skill.where(game_id: @character.game_id).where('id NOT IN (?)', @assignedSkills)
      end
    else
      @skill = Skill.all
      render json: @skill
    end
  end

  def destroy
    @skill= Skill.find(params[:id])
    if @skill
      render json: @skill.destroy
    end
  end

  def create
    @skill = Skill.create(skill_params)
    if @skill
      render json: @skill
    end
  end

  def show
    begin
      @skill = Skill.find(params[:id])
      render json: @skill
    rescue => e
      render json: []
    end
  end

  def update
    @skill = Skill.find(params[:id])
    render json: @skill.update(skill_params)
  end

  private
    def skill_params
      params.require(:skill).permit(:name, :game_id , :description, :context_id)
    end
end
