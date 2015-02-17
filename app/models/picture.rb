class Picture < ActiveRecord::Base
	mount_uploader :media, MediaUploader
end
