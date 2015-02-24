class Picture < ActiveRecord::Base
	mount_uploader :media, MediaUploader
	# validates :media, presence: true
end
