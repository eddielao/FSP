class Api::StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def create
    @student = Student.new(student_params)
    if @student.save
      render "api/students/show"
    else
      render json: @student.errors.full_messages, status: 422
    end
  end

  def show
    @student = Student.find(params[:id])
  end

  def update
    @student = Student.find(params[:id])
    if @student.update_attributes(student_params)
      render "api/students/show"
    else
      render json: @student.errors.full_messages, status: 422
    end
  end

  def destroy
    @student = Student.find(params[:id])
    if @student.destroy
      render "api/students/show"
    else
      render json: @student.errors.full_messages, status: 422
    end
  end

  private

  def student_params
    params.require(:student).permit(:fname, :lname, :email)
  end

end
