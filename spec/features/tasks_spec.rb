require 'rails_helper'

describe 'Task', js: true do
  let!(:user) { create(:user) }
  let!(:project) { create(:project, user_id: user.id) }
  let!(:task) { create(:task, project_id: project.id) }

  before do
    login(user.email)
  end

  context 'When user try to add task in project' do
    context 'with correct data' do
      it 'shows successful message and task shows on page' do
        visit root_path
        click_link 'Projects'
        click_link 'Show tasks'
        click_button 'Add tasks'
        fill_in :name, with: 'Test'
        click_button 'Add task'
        expect(page).to have_content 'Task successfully added'
        expect(page).to have_content 'Test'
      end
    end

    context 'with incorrect data' do
      it 'shows validation error message' do
        visit root_path
        click_link 'Projects'
        click_link 'Show tasks'
        click_button 'Add tasks'
        click_button 'Add task'
        expect(page).to have_content 'Name cannot be empty'
      end
    end
  end

  context 'When user try to delete task' do
    it 'shows message "Task successfully deleted" after delete' do
      visit root_path
      click_link 'Projects'
      click_link 'Show tasks'
      click_button 'delete'
      expect(page).to have_content 'Task successfully deleted'
    end
  end

  context 'When user try to edit task' do
    it 'shows message "Task successfully updated" after update' do
      visit root_path
      click_link 'Projects'
      click_link 'Show tasks'
      click_link 'Edit'
      fill_in :name, with: 'Another task name'
      click_button 'Update task'
      expect(page).to have_content 'Task successfully updated'
    end
  end
end
