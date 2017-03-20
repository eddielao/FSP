export const fetchAllAttendances = () => (
  $.ajax({
    method: 'GET',
    url: '/api/attendances'
  })
);

export const fetchAttendance = id => (
  $.ajax({
    method: 'GET',
    url: `api/attendances/${id}`
  })
);

export const createAttendance = attendance => (
  $.ajax({
    method: 'POST',
    url: '/api/attendances',
    data: attendance
  })
);

export const deleteAttendance = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/attendances/${id}`
  })
);
