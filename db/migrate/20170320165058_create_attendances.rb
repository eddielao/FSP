class CreateAttendances < ActiveRecord::Migration[5.0]
  def change
    create_table :attendances do |t|
      t.date :date, null: false
      t.integer :class_id, null: false
      t.integer :student_id, null: false

      t.timestamps
    end
  end
end
