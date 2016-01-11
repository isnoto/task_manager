require 'capybara-webkit'
require 'capybara/angular'

Capybara.javascript_driver = :webkit

RSpec.configure do |config|
  Dir["./spec/support/**/*.rb"].sort.each { |f| require f }

  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  include Capybara::Angular::DSL
end
