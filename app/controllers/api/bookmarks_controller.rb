class Api::BookmarksController < ApplicationController
  def create
    @bookmark = Bookmark.new(bookmark_params)
    @bookmark.user_id = current_user.id
    if @bookmark.save
      render :show
    else
      render json: @bookmark.errors.full_messages, status: 422
    end
  end

  def index
    @bookmark = Bookmark.where("post_id = #{params[:post_id]}")
    render :index
  end

  def destroy
    bookmark = Bookmark.find(params[:id])
    postid = bookmark.post_id
    bookid = bookmark.id
    bookmark.destroy
    render json: {id: bookid, post_id: postid}
  end

  private

  def bookmark_params
    params.require(:bookmarks).permit(:post_id)
  end
end
