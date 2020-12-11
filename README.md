# Food Search

This repo contains our basic Rails and React boilerplate. Most of our projects revolved around this setup, with Postgres as a database, Rails as our backend framework with a React SPA at the front.

It includes some sane defaults, including a heavily customized Webpack config, user authentication using Sorcery, testing using Rspec and an Administrate engine to manage Users and other backend models.

You can replace the app name `foodsearch` with your own name, and use it to setup a new project. Use `sed` or another tool to replace instances of `foodsearch` and `FoodSearch`.

## Requisites

To run this project you will need the following tools and runtimes:

- Ruby 2.7.2
- Node 12.\*
- Postgres 10 and greater
- Chromedriver

Here at our team, we use [asdf-vm](https://github.com/asdf-vm/asdf) to manage our Ruby and Node versions, we recommend that heavily. You can install Postgres with `homebrew` and Chromedriver with `homebrew cask`.

Our `bin/setup` script will handle installing Ruby and Node if you have [asdf-vm](https://github.com/asdf-vm/asdf) properly installed.

# Developing

Run `bin/setup` to get everything up and running. Then `bin/server` to start hammering away at it.

Also don't forget to setup the default admin user with `rake populate:admin_user`. The default credentials are `admin@mail.com`, the password being `foobar`.
