CarrierWave.configure do |config|
  if Rails.env.test? || Rails.env.development?
  	p 'local'
    config.storage = :file
    config.enable_processing = false
  else
  	p 'heroku'
    config.storage = :fog
    config.fog_credentials = {
    provider: 'AWS',
    # aws_access_key_id: 'AKIAJSDSOVLUOAEWAN6Q',
    # aws_secret_access_key: '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',
    region: 'us-west-2',
  }
    config.fog_directory = 'crapgur3'
  end
end