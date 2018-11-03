Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  get 'home/about' => 'home#about', as: :about

  get 'home/lesson/:spreadsheet_id' => 'home#book', as: :get_book

  get 'home/random/:spreadsheet_id/:worksheet_title' => 'home#random', as: :random
end
