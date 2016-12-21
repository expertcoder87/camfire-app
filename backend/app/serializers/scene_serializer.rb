class SceneSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :secret_story_details, :story_id, :share_image

  def image_url
    begin
      APP_CONFIG.host["url"] + object.avatar.url
    rescue
      nil
    end
  end
end
