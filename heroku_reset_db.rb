system("heroku pg:reset DATABASE --confirm carbon-calculator")
system("heroku rake db:migrate")