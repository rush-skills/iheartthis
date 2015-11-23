json.array!(@images) do |image|
  json.extract! image, :id, :title, :image, :tags, :location, :mode, :user_id
  json.url image_url(image, format: :json)
end
