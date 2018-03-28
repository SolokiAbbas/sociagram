class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      signin(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def edit
    @user = User.new
    render :edit
  end

  def update
    @user = User.find(params[:id])
    if @user.update!(edit_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username, :Fname, :Lname, :email, :handle, :avatar)
  end

  def edit_params
    params.require(:user).permit(:username, :Fname, :Lname, :email, :avatar)
  end

end
