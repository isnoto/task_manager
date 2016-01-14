class TasksController < ApplicationController
  before_action :authenticate_user!
  before_action :find_task_and_project, only: [:edit]
  before_action :find_task, only: [:show, :update, :destroy]

  def show
    respond_with @task
  end

  def edit
    respond_with @project, @task
  end

  def create
    @project = current_user.projects.find(params[:project_id])
    @task = @project.tasks.create(task_params)
    respond_with @project, @task
  end

  def update
    @task.update(task_params)
    respond_with @task.to_json
  end

  def destroy
    respond_with @task.destroy
  end

  private

  def task_params
    params.require(:task).permit(:name, :description, :priority, :done, :deadline, :project_id)
  end

  def find_task
    @task = current_user.tasks.find(params[:id])
  end

  def find_task_and_project
    @project = current_user.projects(params[:project_id])
    @task = current_user.tasks.find(params[:id])
  end
end
