class ProjectsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_project, only: [:update, :destroy]

  def index
    respond_with current_user.projects
  end

  def show
    @project = Project.with_tasks(current_user.id, params[:id])
    respond_with @project
  end

  def create
    @project = current_user.projects.create(project_params)
    respond_with @project
  end

  def update
    @project.update(project_params)
    respond_with @project
  end

  def destroy
    respond_with @project.destroy
  end

  private

  def project_params
    params.require(:project).permit(:name)
  end

  def find_project
    @project = current_user.projects.find(params[:id])
  end
end
