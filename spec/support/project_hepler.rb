def add_project
  visit root_path
  click_link 'Projects'
  fill_in :project_name, with: 'Project'
  click_button 'Add project!'
end
