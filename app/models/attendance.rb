class Attendance < ApplicationRecord
  validates :date, :course_id, :student_id, :status, presence: true

  belongs_to :student,
    class_name: "Student",
    foreign_key: :student_id,
    primary_key: :id

  belongs_to :course,
    class_name: "Course",
    foreign_key: :course_id,
    primary_key: :id
end
