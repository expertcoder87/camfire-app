class Scene < ApplicationRecord
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing_scene.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
  validates_with AttachmentSizeValidator, attributes: :avatar, less_than: 1.megabytes
  belongs_to :story

  amoeba do
     customize(lambda { |original_object,new_object|
       if original_object.avatar.path and File.exist?(original_object.avatar.path)
         file_location = original_object.avatar.path
         new_object.avatar = File.open(file_location)
       end
     })
  end
end
