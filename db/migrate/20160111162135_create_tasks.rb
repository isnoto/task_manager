class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.text :description
      t.integer :project_id, null: false
      t.integer :priority, default: 1
      t.boolean :done, default: false
      t.date :deadline

      t.timestamps null: false
    end

    add_index :tasks, :project_id
  end
end
