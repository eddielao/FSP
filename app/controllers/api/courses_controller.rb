class Api::CoursesController < ApplicationController

  def index
    @courses = Course.all
  end

  def create
    @course = Course.new(course_params)

    if @course.save
      render "api/courses/show"
    else
      render json: @course.errors.full_messages, status: 422
    end
  end

  def show
    @course = Course.find(params[:id])
  end

  private

  def course_params
    params.require(:course).permit(:title)
  end

end
