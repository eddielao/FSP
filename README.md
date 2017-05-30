# eLogix Student Tracker

[eLogix Live](http://www.elogix.center/)

## Features & Implementation

eLogix is a simple but effective application for managing students at tutoring center. The app is made targeting and concentrating on one center. This app lets the center track grades and attendances.

### Student Management

Students are stored in one table containing of three columns, "fname" for first name, "lname" for last name, and email. Relation to grades and attendances are established with the use of foreign keys pointing back to student ID from the respective tables. The list of students while shows all the students in the database is also used for updating their names or emails. The same idea is also used to display courses and to edit courses (see code under Course Management).

### Course Management

Courses are tied to students by grades and attendances. There are not unique schedule for each course. This app is mainly for used by tutoring center where all provided subjects are taught or tutored everyday. Each course is stored by subject title. The list of courses shown under the add form is also used to update existing course like its title.

```js
render() {
  return (
    <tr>
      <td><input type="text" onChange={this.update('fname')}
        defaultValue={this.state.fname} />
      </td>
      <td><input type="text" onChange={this.update('lname')}
        defaultValue={this.state.lname} />
      </td>
      <td><input type="email" onChange={this.update('email')}
        defaultValue={this.state.email} />
      </td>
      <td className="remove">
        <button onClick={() => this.props.deleteStudent(this.state.id)}>
          remove
        </button>
        <button onClick={() => this.props.updateStudent(this.state)}>
          update
        </button>
      </td>
    </tr>
  );
}
```

### Attendance Record

Attendance is recorded by date, course, and student. If a student only comes to the tutoring center for particular subject help, attendance record is able to accommodate such feature.

### Grade Record

Very similar to attendance, grades are stored by letter grade, course, and student.

## Future Directions for the Project

In addition to the features already implemented, I plan to continue to add onto this project. The followings are some of the features.

### Attendance Dashboard

A dashboard shows live updates as students check in. Each student that has checked in will be represented by a green dot next to her name (or a circle around her profile picture) and absent student will be represented by a red dot or circle similarly.

### Search

There should be a search box on the top bar where it can search all the main components (students, courses, attendances, and grades). A search for a name will turn out a list of all students with that name.

### Super User

Users would have different levels of administrative privileges. To start, users can be categorized into 2 levels, super user and regular user. Some privileges that will only be granted under super user are abilities such as editing grades and attendance and removing students. Think of a super user similar to the role of a superintendent where certain administrative rights are exclusive.

## Summary

The intent of this app is to keep it simple while still being user friendly. It does what it suppose to do. With these in mind, all future potential features will continue to enhance functionalities while still keeping the app simple and effective.
