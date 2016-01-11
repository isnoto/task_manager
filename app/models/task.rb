class Task < ActiveRecord::Base
  belongs_to :user
  belongs_to :project

  def self.create_in_project(user, params)
    project = user.find(params[:project_id])
    project.tasks.create(params)
  end
end
