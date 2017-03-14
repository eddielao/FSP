{
  currentUser: {  
    1: {id: 1,  
    username: "demo"},

    2: {id: 2,  
    username: "Steven"}
  },

  classes: {  
    1: {class_id: 1,  
    title: "Math",  
    enrolled_student_id: [1, 3, 4]},

    2: {class_id: 2,  
    title: "Writing",  
    enrolled_student_id: [1, 2]},

    3: {class_id: 3,  
    title: "Intro to App Development",  
    enrolled_student_id: [1, 2, 3, 4, 5, 6]}
  },

  students: {  
    1: {student_id: 1,  
    fname: "Eddie",  
    lname: "Lao",  
    enrolled_class_id: [1, 2, 3]},

    2: {student_id: 2,  
    fname: "Amber",  
    lname: "Liang",  
    enrolled_class_id: [1, 2]},

    3: {student_id: 3,  
    fname: "Chase",  
    lname: "Lao",  
    enrolled_class_id: [3]},

    4: {student_id: 4,  
    fname: "Ashlee",  
    lname: "Liang",  
    enrolled_class_id: [3]},

    5: {student_id: 5,  
    fname: "Eddie",  
    lname: "Edmonds",  
    enrolled_class_id: [2, 3]},

    6: {student_id: 6,  
    fname: "Mia",  
    lname: "Lac",  
    enrolled_class_id: [1, 2, 3]}
  },

  grades: {
    1: {
      grade_id: 1
      student_id: 3,
      class_id: 3,
      grade: 'A'
    },
    2: {
      grade_id: 2
      student_id: 2,
      class_id: 2,
      grade: 'B'
    },
    3: {
      grade_id: 3
      student_id: 6,
      class_id: 1,
      grade: 'B'
    }
  },

  attendance: {  
    1: {
      attendance_id: 1
      date: 3/13/2017,  
      student_id: 1,  
      class_id: 1,  
      status: "Tardy"
    },
    2: {
      attendance_id: 2
      date: 3/15/2017,  
      student_id: 2,  
      class_id: 2,  
      status: "Present"
    },
    3: {
      attendance_id: 3
      date: 3/16/2017,  
      student_id: 5,  
      class_id: 3,  
      status: "Absent"
    },
    4: {
      attendance_id: 4
      date: 3/15/2017,  
      student_id: 4,  
      class_id: 3,
      status: "Present"
    },
    5: {
      attendance_id: 5
      date: 3/13/2017,  
      student_id: 6,  
      class_id: 1,  
      status: "tardy"
    }
  }  
}  
