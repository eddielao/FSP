class AddStatusToAttendances < ActiveRecord::Migration[5.0]
  def change
    add_column :attendances, :status, :string, null: false
  end
end
