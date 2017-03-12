# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Classes

- `GET /api/classes`
- `POST /api/classes`
- `GET /api/classes/:id`
- `PATCH /api/classes/:id`
- `DELETE /api/classes/:id`

### Students

- `GET /api/students`
- `POST /api/students`
- `GET /api/students/:id`
- `PATCH /api/students/:id`
- `DELETE /api/students/:id`

### Attendance

- `GET /api/students/:id/attendance`
- `POST /api/students/:id/classes/:id/attendance`
