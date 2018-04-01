class Api::PostsController < ApplicationController

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: @post.errors.full_messages, status: 422
  end

  def index
    @posts = Post.all
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  private
  def post_params
    params.require(:post).permit(:body, :title, :image)
  end

end
