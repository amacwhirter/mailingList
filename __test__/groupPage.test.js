import React from 'React';
import {mount, shallow} from 'enzyme';
import {ManageGroupPage} from '../src/components/group/ManageGroupPage';

describe ('Manage Group Page', () => {
    it('correctly detects variable is a string', () => {
      const str = "mailing";
      expect(typeof str).toBe("string");
    }),

    it('Group name must be at least 3 characters', () => {
      const wrapper = mount(<ManageGroupPage {...props}/>);
      const saveButton = wrapper.find('input').last();
      expect(saveButton.prop('type')).toBe('submit');
      saveButton.simulate('click');
      expect(wrapper.state().errors.name).toBe('Name must be at least 3 characters.');
    }),

    it('Group location must be at least 3 characters', () => {
      const wrapper = mount(<ManageGroupPage {...props}/>);
      const saveButton = wrapper.find('input').last();
      expect(saveButton.prop('type')).toBe('submit');
      saveButton.simulate('click');
      expect(wrapper.state().errors.location).toBe('Location must be at least 3 characters.');
});
