class Project < ActiveRecord::Base
  belongs_to :user

  validates :name, uniqueness: true, presence: true
end