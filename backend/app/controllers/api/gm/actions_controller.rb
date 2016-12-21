class Api::Gm::ActionsController < Shared::ActionsController

  def create
    @action  = Action.new(target_id:action_params[:action_target_id],
                          level: action_params[:level],
                          character_id: action_params[:character_id],
                          target_type: action_params[:action_target_type]
                          )
    if @action.save
      $client.publish "/notifications", {action: ActionSerializer.new(@action).as_json}.to_json
      render json: {"game_action": @action}
    end
  end

  private
    def action_params
      params.require(:game_action).permit(:action_name, :description, :action_target_id,
                                     :action_target_type, :level, :character_id)
    end


end
