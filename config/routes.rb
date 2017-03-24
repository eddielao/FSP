Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :courses, only: [:index, :create, :destroy, :show, :update]
    resources :students, only: [:index, :create, :destroy, :show]
    resources :enrollments, only: [:index, :create, :destroy, :show]
    resources :attendances, only: [:index, :create, :destroy, :show]
    resources :grades, only: [:index, :create, :destroy, :show]
    resource :session, only: [:create, :destroy]
  end
  root "static_pages#root"
end
