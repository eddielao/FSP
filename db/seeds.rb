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
student1 = Student.create!(fname: 'Mia', lname: 'Lac', email: 'mia@gmail.com')
student2 = Student.create!(fname: 'Collins', lname: 'Lac', email: 'collins@gmail.com')
student3 = Student.create!(fname: 'Ian', lname: 'Lac', email: 'ian@gmail.com')

Course.destroy_all
english = Course.create!(title: 'English')
math = Course.create!(title: 'Math')
science = Course.create!(title: 'Science')

Attendance.destroy_all
attendance1 = Attendance.create!(date: '2017-01-11', course_id: math.id, student_id: student1.id)
attendance1 = Attendance.create!(date: '2017-02-11', course_id: english.id, student_id: student2.id)
attendance1 = Attendance.create!(date: '2017-03-11', course_id: science.id, student_id: student1.id)
attendance1 = Attendance.create!(date: '2016-12-16', course_id: english.id, student_id: student2.id)
attendance1 = Attendance.create!(date: '2016-12-17', course_id: math.id, student_id: student3.id)

Grade.destroy_all
grade1 = Grade.create!(grade: 'A', course_id: math.id, student_id: student1.id)
grade2 = Grade.create!(grade: 'B', course_id: english.id, student_id: student2.id)
grade3 = Grade.create!(grade: 'C', course_id: science.id, student_id: student1.id)
grade4 = Grade.create!(grade: 'A', course_id: english.id, student_id: student2.id)
grade5 = Grade.create!(grade: 'B', course_id: math.id, student_id: student3.id)
