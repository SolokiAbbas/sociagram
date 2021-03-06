class Api::LikesController < ApplicationController
  def create
    @like = Like.new(likes_params)
    @like.liker_id = current_user.id
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def index
    @likes = Like.where("post_id = #{params[:post_id]}")
    render :index
  end

  def destroy
    like = Like.find(params[:id])
    postid = like.post_id
    likeid = like.id
    like.destroy
    render json: {id: likeid, post_id: postid}
  end

  private

  def likes_params
    params.require(:likes).permit(:post_id)
  end
end
