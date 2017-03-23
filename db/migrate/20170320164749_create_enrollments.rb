class CreateEnrollments < ActiveRecord::Migration[5.0]
  def change
    create_table :enrollments do |t|
      t.integer :class_id, null: false
      t.integer :student_id, null: false

      t.timestamps
    end
  end
end
