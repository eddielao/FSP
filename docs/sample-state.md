{
  currentUser: {  
    1: {id: 1,  
    username: "Steven"}
  },

  classes: {  
    1: {id: 1,  
      title: "Math",  
      enrolled_students: [
        {id: 1,  
        fname: "Eddie",  
        lname: "Lao"},
        {id: 3,  
        fname: "Chase",  
        lname: "Lao"},
        {id: 4,  
        fname: "Ashlee",  
        lname: "Liang"}
      ]
    },

    2: {id: 2,  
    title: "Writing",  
    enrolled_students: [ {...}, {...}]
    },  (See class 1)

    3: {id: 3,  
    title: "Intro to App Development",  
    enrolled_students: [  {...},
                          {...},
                          {...},
                          {...},
                          {...},
                          {...}]
    ]  (See class 1)
  },

  students: {  
    1: {id: 1,  
        fname: "Eddie",  
        lname: "Lao",  
        enrolled_classes: [
          {id: 1,  
              title: "Math"},
          {id: 2,  
              title: "Writing"},
          {id: 3,  
          title: "Intro to App Development"}
        ]
    },

    2: {id: 2,  
      fname: "Amber",  
      lname: "Liang",  
      enrolled_classes: [{...}, {...}]   (see student 1)
    },

    3: {id: 3,  
        fname: "Chase",  
        lname: "Lao",  
        enrolled_classes: [{...}]
    },

    4: {id: 4,  
        fname: "Ashlee",  
        lname: "Liang",  
        enrolled_classes: [{...}]
    },

    5: {id: 5,  
        fname: "Eddie",  
        lname: "Edmonds",  
        enrolled_classes: [{...}, {...}]
    },

    6: {id: 6,  
      fname: "Mia",  
      lname: "Lac",  
      enrolled_classes: [{...}, {...}, {...}]
    }
  },

  grades: {
    1: {
      id: 1
      student_id: 3,
      class_id: 3,
      grade: 'A'
    },
    2: {
      id: 2
      student_id: 2,
      class_id: 2,
      grade: 'B'
    },
    3: {
      id: 3
      student_id: 6,
      class_id: 1,
      grade: 'B'
    }
  },

  attendance: {  
    1: {
      id: 1
      date: 3/13/2017,  
      student_id: 1,  
      class_id: 1,  
      status: "Tardy"
    },
    2: {
      id: 2
      date: 3/15/2017,  
      student_id: 2,  
      class_id: 2,  
      status: "Present"
    },
    3: {
      id: 3
      date: 3/16/2017,  
      student_id: 5,  
      class_id: 3,  
      status: "Absent"
    },
    4: {
      id: 4
      date: 3/15/2017,  
      student_id: 4,  
      class_id: 3,
      status: "Present"
    },
    5: {
      id: 5
      date: 3/13/2017,  
      student_id: 6,  
      class_id: 1,  
      status: "tardy"
    }
  }  
}  
