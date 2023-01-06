require "application_system_test_case"

class UserFlowsTest < ApplicationSystemTestCase
  setup do
    Task.destroy_all
  end

  test 'visit the home page' do
    visit tasks_url

    assert_selector 'h1', text: 'TODO'
  end

  test 'create a new task' do
    visit tasks_url

    fill_in 'task_title', with: 'Buy more flour'
    find('#task_title').native.send_keys(:return)

    assert_text 'Buy more flour'
  end

  test 'complete a task' do
    Task.create(title: 'My task to complete', completed_at: nil)

    visit tasks_url
    assert_text 'My task to complete'
    assert_text '1 item left'

    all('input', id: 'completed_at').last.click

    assert_text '0 item left'
  end

  test 'uncomplete a task' do
    Task.create(title: 'My task to uncomplete', completed_at: 2.days.ago)

    visit tasks_url
    assert_text 'My task to uncomplete'
    assert_text '0 item left'

    all('input', id: 'completed_at').last.click

    assert_text '1 item left'
  end

  test 'destroy a task' do
    Task.create(title: 'My task to keep')
    Task.create(title: 'My task to destroy')

    visit tasks_url
    assert_text 'My task to keep'
    assert_text 'My task to destroy'
    assert_text '2 items left'

    all('button', class: 'destroy-task-button').last.click

    assert_text 'My task to keep'
    assert_text '1 item left'
  end
end
