class Attendance < ApplicationRecord
  validates :date, :course_id, :student_id, presence: true

  belongs_to :student
  belongs_to :course
end
