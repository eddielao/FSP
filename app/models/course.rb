class Course < ApplicationRecord
  validates :title, uniqueness: true
end
