class CreateGrades < ActiveRecord::Migration[5.0]
  def change
    create_table :grades do |t|
      t.string :grade, null: false
      t.integer :class_id, null: false
      t.integer :student_id, null: false

      t.timestamps
    end
  end
end
