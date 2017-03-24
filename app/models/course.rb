class Course < ApplicationRecord
  validates :title, uniqueness: true, presence: true

  has_many :students
end
