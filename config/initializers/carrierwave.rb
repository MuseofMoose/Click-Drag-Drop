CarrierWave.configure do |config|
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: 'AKIAJ4QVCEXHEINCIZMA',
    aws_secret_access_key: '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',
    region: 'us-west-2',
  }

  if Rails.env.test? || Rails.env.development?
    config.storage = :file
    config.enable_processing = false
    config.root = "#{Rails.root}/tmp"
  else
    config.storage = :fog
  end

  config.cache_dir = "#{Rails.root}/tmp/uploads"
  config.fog_directory = ENV['S3_BUCKET_NAME']
end