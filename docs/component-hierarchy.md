# Component Hierarchy
___

##### AuthFormContainer
* AuthForm

##### HomeContainer
* Home
* Sidebar
* Take Attendance
* Add/Edit Student
* Manage Classes
* Record Grades

##### AttendanceContainer
* Calendar
* Attendance

##### ClourseContainer
* Add Course
* List of Courses

##### StudentContainer
* Add Student
* List of Students

##### GradeContainer
* Record Grades

### Routes
___
| Path               | Component             |
| ------------------ |:---------------------:|
| "/sign-up"         | "AuthFormContainer"   |
| "/sign-in"         | "AuthFormContainer"   |
| "/home             | "HomeContainer"       |
| "/home/attendance" | "AttendanceContainer" |
| "/home/classes"    | "CourseContainer"      |
| "/home/students"   | "StudentContainer"    |
| "/home/grades"     | "GradeContainer"      |
