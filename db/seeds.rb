# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
guest = User.create!(username:'Guest', password:'password')
eddie = User.create!(username:'Eddie', password:'password')

Student.destroy_all
mia = Student.create!(fname: 'Mia', lname: 'Lac', email: 'mia@gmail.com')
collins = Student.create!(fname: 'Collins', lname: 'Lac', email: 'collins@gmail.com')
ian = Student.create!(fname: 'Ian', lname: 'Lac', email: 'ian@gmail.com')
eddie = Student.create!(fname: 'Eddie', lname: 'Lao', email: 'el@gmail.com')

Course.destroy_all
english = Course.create!(title: 'English')
math = Course.create!(title: 'Math')
science = Course.create!(title: 'Science')

Attendance.destroy_all
attendance1 = Attendance.create!(date: '2017-03-06', course_id: math.id, student_id: mia.id)
attendance2 = Attendance.create!(date: '2017-03-07', course_id: english.id, student_id: collins.id)
attendance3 = Attendance.create!(date: '2017-03-08', course_id: science.id, student_id: ian.id)
attendance4 = Attendance.create!(date: '2016-03-09', course_id: english.id, student_id: eddie.id)
attendance5 = Attendance.create!(date: '2016-03-10', course_id: math.id, student_id: mia.id)

Grade.destroy_all
grade1 = Grade.create!(grade: 'A', course_id: math.id, student_id: mia.id)
grade2 = Grade.create!(grade: 'B', course_id: english.id, student_id: collins.id)
grade3 = Grade.create!(grade: 'C', course_id: science.id, student_id: eddie.id)
grade4 = Grade.create!(grade: 'A', course_id: english.id, student_id: mia.id)
grade5 = Grade.create!(grade: 'B', course_id: math.id, student_id: ian.id)
