class Api::GradesController < ApplicationController

    def index
      @grades = Grade.all
    end

    def create
      @grade = Grade.new(grade_params)

      if @grade.save
        render "api/grades/show"
      else
        render json: @grade.errors.full_messages, status: 422
      end
    end

    def show
      @grade = Grade.find(params[:id])
    end

    def destroy
      @grade = Grade.find(params[:id])
      if @grade.destroy
        render "api/grades/show"
      else
        render json: @grade.errors.full_messages, status: 422
      end
    end

    private

    def grade_params
      params.require(:grade).permit(:grade, :course_id, :student_id)
    end

end
