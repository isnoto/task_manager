class ProjectsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_project, only: [:show, :update, :destroy]

  def index
    respond_with current_user.projects
  end

  def show
    respond_with @project
  end

  def create
    @project = current_user.projects.build(project_params)

    if @project.save
      respond_with @project
    else
      respond_with @project
    end
  end

  def update
    if @project.update(project_params)
      respond_with @project
    else
      respond_with @project
    end
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
