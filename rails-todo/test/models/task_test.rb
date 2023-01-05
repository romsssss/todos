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
end
