class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :signed_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def signin(user)
    @current_user = user
    session[:session_token] = user.reset_token!
  end

  def signout
    current_user.reset_token!
    session[:session_token] = nil
  end

  def require_signed_in!
    unless current_user
      render '/api/users'
    end
  end

end
