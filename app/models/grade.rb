class Grade < ApplicationRecord
  validates :grade, :course_id, :student_id, presence: true

  belongs_to :student,
    class_name: "Student",
    foreign_key: :student_id,
    primary_key: :id

  belongs_to :course,
    class_name: "Course",
    foreign_key: :course_id,
    primary_key: :id
end
