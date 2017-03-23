@students.each do |student|
  json.set! student.id do
    json.extract! student, :id, :fname, :lname, :email
  end
end
