json.extract! post, :id, :body, :title, :author_id
json.image_url asset_path(post.image.url)
