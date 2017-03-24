export const fetchAllCourses = () => (
  $.ajax({
    method: 'GET',
    url: '/api/courses'
  })
);

export const fetchCourse = id => (
  $.ajax({
    method: 'GET',
    url: `api/courses/${id}`
  })
);

export const createCourse = course => (
  $.ajax({
    method: 'POST',
    url: '/api/courses',
    data: course
  })
);

export const deleteCourse = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/courses/${id}`
  })
);

export const updateCourse = course => (
  $.ajax({
    method: 'PATCH',
    url: `api/courses/${course.id}`,
    data: {course}
  })
);
