require "test_helper"

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  if ENV.fetch('HEADLESS_CHROME', false)
    driven_by :selenium, using: :headless_chrome
  else
    driven_by :selenium, using: :chrome, screen_size: [1400, 1400]
  end
end
