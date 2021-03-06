class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follows_param)
    @follow.follower_id = current_user.id
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def index
    # @followers = Follow.where("follower_id = #{params[:follower_id]}")
    @followees = Follow.where("followee_id = #{params[:follower_id]}")
    render :index
  end

  def destroy
    follow = Follow.where({followee_id: params[:id], follower_id: current_user.id})
    followerid = current_user.id
    followeeid = params[:id].to_i
    follow.first.destroy
    render json: { follower_id: followerid, followee_id: followeeid}
  end

  private

  def follows_param
    params.require(:follows).permit(:followee_id)
  end

end
