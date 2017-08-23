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
    comment.destroy
    render json: {}
  end

  def index
    @comment = Comment.find(params[:post_id])
    render :index
  end

  private
  def post_params
    params.require(:post).permit(:body, :title, :post_id)
  end

end
