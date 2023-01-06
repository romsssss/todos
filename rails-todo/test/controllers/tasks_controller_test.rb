require "test_helper"

class TasksControllerTest < ActionDispatch::IntegrationTest
  test '#index renders a valid response' do
    get tasks_url
    assert_response :success
  end

  test '#create persist a new Task in database' do
    assert_difference('Task.count', 1) do
      post tasks_url, params: { task: { title: 'My new task' } }
    end

    assert_redirected_to tasks_url
  end

  test '#destroy removes the task from database' do
    task = tasks(:one)
    assert_difference('Task.count', -1) do
      delete task_url(task)
    end

    assert_redirected_to tasks_url
  end

  test '#update allows title edition' do
    task = tasks(:one)

    patch task_url(task), params: { task: { title: 'My updated title' } }

    assert_redirected_to tasks_url
    task.reload
    assert_equal 'My updated title', task.title
  end

  test '#complete flag the task as completed' do
    task = tasks(:active)
    assert_nil task.completed_at

    put complete_task_url(task)

    assert_redirected_to tasks_url
    task.reload
    assert_not_nil task.completed_at
  end

  test '#uncomplete flag the task as active' do
    task = tasks(:completed)
    assert_not_nil task.completed_at

    put uncomplete_task_url(task)

    assert_redirected_to tasks_url
    task.reload
    assert_nil task.completed_at
  end
end
