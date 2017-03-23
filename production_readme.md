#eLogix Student Tracker

[eLogix Live][https://elogix-student-tracker.herokuapp.com/#/students/add?_k=d3x0qo]

[heroku]: https://elogix-student-tracker.herokuapp.com/#/students/add?_k=d3x0qo

## Features & Implementation

### Student Management

Students are stored in one table containing of three columns, fname for first name, lname for last name, and email. Relation to grades and attendances are established with the use of foreign keys pointing back to student ID from the respective tables.

### Course Management

Courses are tied to students by grades and attendances only. There are not unique schedule for each course. This app is mainly for used by tutoring center where subjects are taught or tutored everyday. Each course is stored by subject title.

### Attendance Record

Attendance is recorded by date, course, and student. If a student only comes to the tutoring center for certain subject, attendance should be recorded as such.

### Grade Record

Very similar to attendance, grades are stored by a letter grade, course, and student.

## Future Directions for the Project

In addition to the features already implemented, I plan to continue to add onto this project. The followings are some of the features.

### Attendance Dashboard

A dashboard shows live updates as students check in. Each student that has checked in will be represented by a green dot next to her name and absent student will be represented by a red dot.

### Search

There should be a search box on the top bar where it can search all the main components (students, courses, attendances, and grades). A search for a name will turn out a list of all students with that name.
