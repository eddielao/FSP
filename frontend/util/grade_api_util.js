export const fetchAllGrades = () => (
  $.ajax({
    method: 'GET',
    url: '/api/grades'
  })
);

export const fetchGrade = id => (
  $.ajax({
    method: 'GET',
    url: `api/grades/${id}`
  })
);

export const createGrade = course => (
  $.ajax({
    method: 'POST',
    url: '/api/grades',
    data: course
  })
);

export const deleteGrade = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/grades/${id}`
  })
);
