class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(post_params)
    @comment.author_id = current_user.id
    if @comment.save
      render :index
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
    @comments = Comment.find(params[:post_id])
    render :index @comments
  end

  private
  def post_params
    params.require(:comment).permit(:body, :post_id)
  end

end
