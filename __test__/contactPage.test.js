import React from 'React';
import {mount, shallow} from 'enzyme';
import {ManageContactPage} from '../src/components/contact/ManageContactPage';

describe ('Manage Contact Page', () => {
    it('correctly detects variable is a string', () => {
      const str = "contacts";
      expect(typeof str).toBe("string");
    }),

    it('Contact name must be at least 3 characters', () => {
      const wrapper = mount(<ManageContactPage {...props}/>);
      const saveButton = wrapper.find('input').last();
      expect(saveButton.prop('type')).toBe('submit');
      saveButton.simulate('click');
      expect(wrapper.state().errors.name).toBe('Name must be at least 3 characters.');
    }),

    it('Contact email must be in the correct email format', () => {
      const wrapper = mount(<ManageContactPage {...props}/>);
      const saveButton = wrapper.find('input').last();
      expect(saveButton.prop('type')).toBe('submit');
      saveButton.simulate('click');
      expect(wrapper.state().errors.email).toBe('Email must be in the correct format.');

    it('Contact must select a group', () => {
      const wrapper = mount(<ManageContactPage {...props}/>);
      const saveButton = wrapper.find('input').last();
      expect(saveButton.prop('type')).toBe('submit');
      saveButton.simulate('click');
      expect(wrapper.state().errors.group).toBe('Group must be selected.');
});
