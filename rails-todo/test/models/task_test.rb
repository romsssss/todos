require "test_helper"

class TaskTest < ActiveSupport::TestCase
  test 'valid task' do
    task = Task.new(title: 'My first task')
    assert task.valid?
  end

  test 'invalid without title' do
    task = Task.new
    assert_not task.valid?, 'task is valid without a title'
  end

  test 'active scope' do
    task1 = Task.create(title: 'Task 1')
    task2 = Task.create(title: 'Task 2', completed_at: 2.days.ago)
    task3 = Task.create(title: 'Task 3')
    task4 = Task.create(title: 'Task 4', completed_at: 10.minutes.ago)

    assert_includes Task.active, task1
    assert_not_includes Task.active, task2
    assert_includes Task.active, task3
    assert_not_includes Task.active, task4
  end

  test 'completed scope' do
    task1 = Task.create(title: 'Task 1')
    task2 = Task.create(title: 'Task 2', completed_at: 2.days.ago)
    task3 = Task.create(title: 'Task 3')
    task4 = Task.create(title: 'Task 4', completed_at: 10.minutes.ago)

    assert_not_includes Task.completed, task1
    assert_includes Task.completed, task2
    assert_not_includes Task.completed, task3
    assert_includes Task.completed, task4
  end
end
