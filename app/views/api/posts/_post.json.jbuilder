json.extract! post, :id, :body, :title, :author_id, :created_at
json.image_url asset_path(post.image.url)
