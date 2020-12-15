# Food Search

Postgres as a database, Rails as our backend framework with a React SPA at the front.

It includes some sane defaults, including a heavily customized Webpack config, user authentication using Sorcery, testing using Rspec and an Administrate engine to manage Users and other backend models.


## Requisites

To run this project you will need the following tools and runtimes:

- Ruby 2.7.2
- Node 12.\*
- Postgres 10 and greater
- Chromedriver

Our `bin/setup` script will handle installing Ruby and Node if you have [asdf-vm](https://github.com/asdf-vm/asdf) properly installed.

# Developing

Run `bin/setup` to get everything up and running. Then `bin/server` to start hammering away at it.

Also don't forget to setup the default admin user with `rake populate:admin_user`. The default credentials are `admin@mail.com`, the password being `foobar`.

Populate Db with `rake db:seed`
