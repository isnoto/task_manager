class Project < ActiveRecord::Base
  belongs_to :user
  has_many :tasks

  validates :name, uniqueness: true, presence: true

  def as_json(options = {})
    super(options.merge(include: :tasks))
  end

  def self.with_tasks(user_id, id)
    includes(:tasks).find_by(user_id: user_id, id: id)
  end
end
