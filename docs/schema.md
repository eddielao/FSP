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

## enrollments
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
class_id            | integer   | not null, foreign key (reference table classes)
student_id          | integer   | not null, foreign key (reference table students)

## grades
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
grade               | string    | not null
class_id            | integer   | not null, foreign key (reference table classes)
student_id          | integer   | not null, foreign key (reference table student)

## attendance
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
date                | date      | not null
class_id            | integer   | not null, foreign key (reference table classes)
student_id          | integer   | not null, foreign key (reference table students)
