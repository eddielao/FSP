# Schema Information
___

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## students
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
fname           | string    | not null, indexed
lname           | string    | not null, indexed
email           | string    | not null, unique

## classes
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
title               | string    | not null, indexed, unique

#enrollments
column name         | data type | details
--------------------|-----------|-----------------------
class_id            | integer   | not null, foreign key
student_id          | integer   | not null, foreign key

## grades
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
grade               | string    | not null
subject_id          | integer   | not null, foreign key
enrolled_student_id | integer   | not null, foreign key

## attendance
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
date                | date      | not null
subject_id          | integer   | not null, foreign key
enrolled_student_id | integer   | not null, foreign key
