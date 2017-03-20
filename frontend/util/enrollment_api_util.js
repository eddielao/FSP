export const fetchAllEnrollments = () => (
  $.ajax({
    method: 'GET',
    url: '/api/enrollments'
  })
);

export const fetchEnrollment = id => (
  $.ajax({
    method: 'GET',
    url: `api/enrollments/${id}`
  })
);

export const createEnrollment = enrollment => (
  $.ajax({
    method: 'POST',
    url: '/api/enrollments',
    data: enrollment
  })
);

export const deleteEnrollment = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/enrollments/${id}`
  })
);
