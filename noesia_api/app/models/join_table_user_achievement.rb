class JoinTableUserAchievement < ApplicationRecord

  belongs_to :user
  belongs_to :achievements
  
end
