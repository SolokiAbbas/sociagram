json.extract! post, :id, :body, :title
json.image_url asset_path(post.image.url)
