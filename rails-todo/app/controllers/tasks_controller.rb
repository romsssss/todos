class TasksController < ApplicationController
  before_action :set_task, only: %i[destroy update complete uncomplete]

  # GET /tasks
  def index
    set_tasks
    @task = Task.new
  end

  # POST /tasks
  def create
    @task = Task.new(task_params)

    respond_to do |format|
      if @task.save
        format.html { redirect_to tasks_url, notice: I18n.t('notice.task_created') }
      else
        set_tasks
        format.html { render :index, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tasks/:id
  def update
    respond_to do |format|
      if @task.update(task_params)
        format.html { redirect_to tasks_url, notice: I18n.t('notice.task_updated') }
      else
        set_tasks
        format.html { render :index, status: :unprocessable_entity }
      end
    end
  end

  # PUT /tasks/:id/complete
  def complete
    respond_to do |format|
      if @task.update(completed_at: Time.zone.now)
        format.html { redirect_to tasks_url, notice: I18n.t('notice.task_completed') }
      else
        set_tasks
        format.html { render :new, status: :unprocessable_entity }
      end
    end
  end

  # PUT /tasks/:id/complete
  def uncomplete
    respond_to do |format|
      if @task.update(completed_at: nil)
        format.html { redirect_to tasks_url, notice: I18n.t('notice.task_uncompleted') }
      else
        set_tasks
        format.html { render :new, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tasks/:id
  def destroy
    @task.destroy

    respond_to do |format|
      format.html { redirect_to tasks_url, notice: I18n.t('notice.task_destroyed') }
    end
  end

  private

  def set_task
    @task = Task.find(params[:id])
  end

  def set_tasks
    @tasks = Task.all.order(created_at: :desc)
    @tasks = @tasks.active if params[:filter] == 'active'
    @tasks = @tasks.completed if params[:filter] == 'completed'

    @active_tasks_count = Task.active.count
  end

  def task_params
    params.require(:task).permit(:title)
  end

  def filter_param
    params.require(:task).permit(:title)
  end
end
