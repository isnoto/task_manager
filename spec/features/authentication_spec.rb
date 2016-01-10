require 'rails_helper'

describe 'Authentication', js: true do
  let!(:user) { create(:user) }

  context 'When user try to log in' do
    context 'with correct data' do
      it 'page shows successful message' do
        visit root_path
        click_link 'Log In'
        fill_in :email, with: user.email
        fill_in :password, with: user.password
        click_button 'Log In'
        expect(page).to have_content 'Welcome'
      end
    end

    context 'with incorrect data' do
      it 'page shows message "You have entered a wrong email or password"' do
        visit root_path
        click_link 'Log In'
        fill_in :email, with: 'wrong@gmail.com'
        fill_in :password, with: 'wrong'
        click_button 'Log In'
        expect(page).to have_content 'You have entered a wrong email or password'
      end
    end
  end
end