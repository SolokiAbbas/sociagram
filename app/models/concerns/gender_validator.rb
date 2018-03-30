class GenderValidator < ActiveModel::Validator
  # Custom validator so no user can inject custom values from front end
  def validate(user)
    if user.gender != "Male" && user.gender != "Female" && user.gender != "Not Specified"
      user.errors[:base] << "Not a Valid Gender"
    end
  end

end
