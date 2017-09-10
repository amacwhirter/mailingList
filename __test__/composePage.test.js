import React from 'React';
import {mount, shallow} from 'enzyme';
import {ManageComposePage} from '../src/components/compose/ManageComposePage';

describe ('Manage Compose Page', () => {
    it('correctly detects variable is a string', () => {
      const str = "compose";
      expect(typeof str).toBe("string");
    }),

    it('Composer must select a group to send to', () => {
      const wrapper = mount(<ManageComposePage {...props}/>);
      const sendButton = wrapper.find('input').last();
      expect(sendButton.prop('type')).toBe('submit');
      sendButton.simulate('click');
      expect(wrapper.state().errors.group).toBe('Group must be selected.');
    }),

    it('Compose subject must be at least 3 characters', () => {
      const wrapper = mount(<ManageComposePage {...props}/>);
      const sendButton = wrapper.find('input').last();
      expect(sendButton.prop('type')).toBe('submit');
      sendButton.simulate('click');
      expect(wrapper.state().errors.subject).toBe('Subject must be at least 3 characters.');

    it('Compose message must be at least 3 characters', () => {
      const wrapper = mount(<ManageComposePage {...props}/>);
      const sendButton = wrapper.find('input').last();
      expect(sendButton.prop('type')).toBe('submit');
      sendButton.simulate('click');
      expect(wrapper.state().errors.message).toBe('Message must be at least 3 characters');
});
