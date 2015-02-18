json.array!(@pictures) do |picture|
  json.extract! picture, :id, :title, :url, :media
  json.url picture_url(picture, format: :json)
end
