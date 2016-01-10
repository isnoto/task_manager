FactoryGirl.define do
  factory :user do
    email 'qwerty@gmail.com'
    password 12345678
    password_confirmation { password }
  end
end
