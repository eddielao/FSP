class Api::EnrollmentsController < ApplicationController

  def index
    @enrollments = Enrollment.all
  end

  def create
    @enrollment = Enrollment.new(enrollment_params)
    if @enrollment.save
      render "api/enrollments/show"
    else
      render json: @enrollment.errors.full_messages, status: 422
    end
  end

  def show
    @enrollment = Enrollment.find(params[:id])
  end

  def destroy
    @enrollment = Enrollment.find(params[:id])
    if @enrollment.destroy
      render "api/enrollments/show"
    else
      render json: @enrollment.errors.full_messages, status: 422
    end
  end

  private

  def enrollment_params
    params.require(:enrollment).permit(:course_id, :student_id)
  end

end
