require 'rails_helper'

describe 'Projects', js: true do
  let!(:user) { create(:user) }

  before do
    login(user.email)
  end

  context 'When user try to add project' do
    context 'with correct data' do
      it 'shows successful message and project shows on page' do
        visit root_path
        click_link 'Projects'
        fill_in :project_name, with: 'Test'
        click_button 'Add project!'
        expect(page).to have_content 'Project Test was successfully created'
        expect(page).to have_link 'Show tasks'
      end
    end

    context 'with already existing name' do
      it 'shows validation error message' do
        add_project
        fill_in :project_name, with: 'Project'
        click_button 'Add project!'
        expect(page).to have_content 'has already been taken'
      end
    end
  end

  context 'When user try to delete project' do
    it 'after deleting shows successful message' do
      add_project
      click_button 'Delete'
      expect(page).to have_content 'Project has been deleted'
    end
  end
end
