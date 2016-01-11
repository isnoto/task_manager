def login(email)
  visit root_path
  click_link 'Log In'
  fill_in :email, with: email
  fill_in :password, with: 12345678
  click_button 'Log In'
end