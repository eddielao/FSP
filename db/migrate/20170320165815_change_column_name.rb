class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :enrollments, :class_id, :course_id
    rename_column :attendances, :class_id, :course_id
    rename_column :grades, :class_id, :course_id
  end
end
