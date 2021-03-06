class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def index
    @users = User.all
    render :index
  end

  def search
    @users = User.search_users(params[:username])
    if @users
      render :search
    else
      render json: {}
    end
  end

  def create
    @user = User.new(user_params)
    if !@user.avatar
      @user.avatar = "https://s3.amazonaws.com/sociagram-dev/posts/icons/add-button.png"
    end
    p @user
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
    if(params[:user][:newpassword])
      if @user.valid_password?(password_params[:oldpassword])
        @user.password=password_params[:newpassword]
        if @user.save
          render :show
        else
          render json: ["New Password is invalid, Min Length should be 6"], status: 422
        end
      else
        render json: ["Old Password is Incorrect"], status: 422
      end
    else
      if @user.update(edit_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username, :Fname, :Lname, :email, :handle, :avatar)
  end

  def edit_params
    params.require(:user).permit(:username, :Fname, :Lname, :email, :avatar, :bio, :gender)
  end

  def password_params
    params.require(:user).permit(:oldpassword, :newpassword)
  end

end
