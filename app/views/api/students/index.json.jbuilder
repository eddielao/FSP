@students.each do |student|
  json.set! student.id do
    json.extract! student, :fname, :lname, :email
  end
end
