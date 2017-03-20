class CreateStudents < ActiveRecord::Migration[5.0]
  def change
    create_table :students do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :email, null: false

      t.timestamps
    end
  end
end
