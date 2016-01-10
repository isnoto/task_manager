require 'rails_helper'

describe 'Registration', js: true do
  context 'When user try to register' do
    context 'with correct data' do
      it 'page shows successful message' do
        visit root_path
        click_link 'Register'
        fill_in :email, with: 'test@gmail.com'
        fill_in :password, with: 12345678
        fill_in :password_confirmation, with: 12345678
        click_button 'Register'
        expect(page).to have_content 'You have successfully registered'
        expect(page).to have_content 'test@gmail.com'
      end
    end

    context 'with incorrect data' do
      it 'page shows message "Check the correctness of filling fields"' do
        visit root_path
        click_link 'Register'
        click_button 'Register'
        expect(page).to have_content 'Check the correctness of filling fields'
      end
    end
  end
end