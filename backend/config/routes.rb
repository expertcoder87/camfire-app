Backend::Application.routes.draw do

	# You can have the root of your site routed with "root"
	root 'home#index'

	namespace :api do
		namespace :gm, defaults: {format: 'json'} do
			resources :games do
				collection do
					patch 'download_game' => 'games#download_game', :defaults => {:format => :json}
				end
			end
			resources :users
			resources :stories
			resources :attributes
			resources :skills
			resources :invitations
			resources :inventory_items do
				collection do
						post 'give_item' => 'inventory_items#give_item', :defaults => {:format => :json}
						post 'move_item' => 'inventory_items#move_item', :defaults => {:format=> :json}
				end
			end
			resources :actions
			resources :scenes
			resources :game_actions do
				collection do
					post '' => 'actions#create'
				end
			end
			resources :contexts
			resources :skills
			resources :attributes
			resources :things do
				collection do
					post 'upload' => 'things#upload_image',:defaults => {:format => :json}
				end
			end
			resources :scenes do
				collection do
					post 'upload' => 'scenes#upload_image',:defaults => {:format => :json}
				end
			end
			resources :characters do
				collection do
					post 'upload' => 'characters#upload_image', :defaults => {:format => :json}
				end
			end
			resources :inventories
		end
		namespace :v1, defaults: {format: 'json'} do
			resources :games
			resources :characters
			resources :quests
      resources :quest_items
			resources :inventories
			resources :actions
      resources :contexts
      resources :scenes
      resources :inventory_items do
				collection do
						post 'give_item' => 'inventory_items#give_item', :defaults => {:format => :json}
						post 'move_item' => 'inventory_items#move_item', :defaults => {:format=> :json}
				end
			end

			resources :stories
			resources :attributes
			resources :skills
			resources :things
			resources :users, only: %w(index show update create) do
				collection do
					get 'logged_in'
					post 'sign_in' => 'users#user_signin', :defaults => { :format => :json }
					post 'change_password'
					post 'forgot_password'
					get 'resend_confirmation'
					post 'sign_up' => 'users#user_signup'
				end
			end

			post 'users/auth/facebook' => 'users#facebook'
			post 'users/auth/google' => 'users#google'

			post 'users/auth/linkedinLogin' => 'users#linkedin'
			get 'users/auth/twitterLogin' => 'users#twitter'


			#omniauth login
			get "/auth/linkedin/callback" => "users#linkedin_callback"

			get "/auth/twitter/callback" => "users#twitter_callback"
			post "/auth/twitter/email_twitter_callback" => "users#email_twitter_callback"
		end
	end


	devise_for :users, path: 'auth', controllers: {
			confirmations: 'users/confirmations',
			passwords: 'users/passwords',
			registrations: 'users/registrations',
			sessions: 'users/sessions',
	}


	scope :path => "api/v1/" do
		# The priority is based upon order of creation: first created -> highest priority.
		# See how all your routes lay out with "rake routes".

		#For setting routes devise_scope must be used
		devise_scope :user do
			get 'sign_out' => 'users/sessions#destroy'
			get 'sign_in' => 'users/sessions#new'
			get 'sign_up' => 'users/registrations#new'
		end
	end

	# capturing all ember routes below
	get '/home(/*whatever)' => 'home#index', :defaults => { :format => :json}
end
