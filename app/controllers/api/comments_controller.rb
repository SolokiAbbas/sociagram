class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(post_params)
    @comment.author_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment_id = comment.id
    comment.destroy
    render json: {id: comment_id}
  end

  def index
    @comments = Comment.where("post_id = #{params[:post_id]}")
    render :index
  end

  def show
    @comments = Comment.where("post_id = #{params[:id]}")
    render :show
  end

  private

  def post_params
    params.require(:comment).permit(:body, :post_id)
  end

end
