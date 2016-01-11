class TasksController < ApplicationController
  before_action :authenticate_user!
  before_action :find_task, only: [:show, :update, :destroy]

  def index
    respond_with Project.find(params[:id]).tasks
  end

  def show
    respond_with @task
  end

  def create
    @task = Task.create_in_project(current_user, task_params)
    respond_with @task
  end

  def update
    @task.update(task_params)
    respond_with @task
  end

  def destroy
    respond_with @task.destroy
  end

  private

  def task_params
    params.require(:task).permit(:name, :description, :done, :deadline, :project_id)
  end

  def find_task
    @task = current_user.tasks.find(params[:id])
  end
end
