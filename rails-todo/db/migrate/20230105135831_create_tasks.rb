class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.datetime :completed_at

      t.timestamps
    end
  end
end
