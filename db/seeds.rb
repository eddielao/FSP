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
student1 = Student.create!(fname: 'Collins', lname: 'Lac', email: 'collins@gmail.com')
student1 = Student.create!(fname: 'Ian', lname: 'Lac', email: 'ian@gmail.com')

Course.destroy_all
english = Course.create!(title: 'English')
math = Course.create!(title: 'Math')
