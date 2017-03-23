@grades.each do |grade|
  json.set! grade.id do
    json.extract! grade, :id, :grade, :course_id, :course, :student_id, :student
  end
end
