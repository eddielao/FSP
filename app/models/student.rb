class Student < ApplicationRecord
  validates :fname, :lname, :email, presence: true

  has_many :attendances
  has_many :enrollments
  has_many :grades
end
