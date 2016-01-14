class Task < ActiveRecord::Base
  belongs_to :user
  belongs_to :project

  validates :name, presence: true
end
