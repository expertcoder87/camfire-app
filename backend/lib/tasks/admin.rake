namespace :add_role do
  task :admin => :environment do
    User.add_default_admin
  end

  task :default => :environment do
    Role.add_default_roles
  end

end

# run rake add_role:admin