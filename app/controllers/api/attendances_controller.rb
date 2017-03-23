class Api::AttendancesController < ApplicationController

    def index
      @attendances = Attendance.all
    end

    def create
      @attendance = Attendance.new(attendance_params)

      if @attendance.save
        render "api/attendances/show"
      else
        render json: @attendance.errors.full_messages, status: 422
      end
    end

    def show
      @attendance = Attendance.find(params[:id])
    end

    def destroy
      @attendance = Attendance.find(params[:id])
      if @attendance.destroy
        render "api/attendances/show"
      else
        render json: @attendance.errors.full_messages, status: 422
      end
    end

    private

    def attendance_params
      params.require(:attendance).permit(:date, :course_id, :student_id)
    end

end
