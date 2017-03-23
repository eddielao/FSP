@enrollments.each do |enrollment|
  json.set! enrollment.id do
    json.extract! enrollment, :id, :course_id, :student_id
  end
end
