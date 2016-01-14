[![Build Status](https://travis-ci.org/isnoto/task_manager.svg)](https://travis-ci.org/isnoto/task_manager)
[![Code Climate](https://codeclimate.com/github/isnoto/task_manager/badges/gpa.svg)](https://codeclimate.com/github/isnoto/task_manager)
# Task Manager

## Dependencies

* nodejs & bower
* Ruby 2.3.0
* PostgreSQL 9.4

## Strat 

Clone repository:

``` git clone https://github.com/isnoto/task_manager.git ```

Visit task_manager directory:

``` cd task_manager ```

Install bundler and gems:

``` gem install bundle && bundle install ```

Install frontend dependencies

``` rake bower:install ```

Create database:

``` rake db:create && rake db:migrate ```

Strating app:

``` rails s ```

Visit:

``` http://127.0.0.1:3000 ```



## Testing 

Run specs: 

``` rspec ```

 