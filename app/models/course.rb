class Course < ApplicationRecord
  validates :title, uniqueness: true

  has_many :students
end
