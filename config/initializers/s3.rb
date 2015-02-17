CarrierWave.configure do |config|
	config.fog_credentials = {
		:provider => 'AWS',
		:aws_access_key_id => "AKIAJSW2PZLMVRPQBSNA",
		:aws_secret_access_key => "ZCCwXTUevy9FB39kuMoY3P13AKAnl9OLM/nsnpCQy"
		# :region => ENV['S3_REGION']
	}
	config.fog_directory = ENV['S3_BUCKET']
end