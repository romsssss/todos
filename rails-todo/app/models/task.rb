class Task < ApplicationRecord
  validates :title, presence: true

  scope :active, -> { where(completed_at: nil) }
  scope :completed, -> { where.not(completed_at: nil) }
end
