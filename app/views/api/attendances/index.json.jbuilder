@attendances.each do |attendance|
  json.set! attendance.id do
    json.extract! attendance, :date, :course_id, :student_id
  end
end
