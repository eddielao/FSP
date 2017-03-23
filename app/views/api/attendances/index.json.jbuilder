@attendances.each do |attendance|
  json.set! attendance.id do
    json.extract! attendance, :id, :date, :course_id, :course, :student_id, :student
  end
end
