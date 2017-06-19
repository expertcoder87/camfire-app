namespace :add_role do
  task :admin => :environment do
    User.add_default_admin
  end
end
