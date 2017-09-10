import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ContactForm = ({contact, allGroups, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Contacts</h1>
      <TextInput
        name="name"
        label="Name"
        placeholder="Enter Full Name"
        value={contact.name}
        onChange={onChange}
        error={errors.name}/>

      <TextInput
        name="email"
        label="Email"
        placeholder="Enter Contact Email"
        value={contact.email}
        onChange={onChange}
        error={errors.email}/>

      <SelectInput
        name="group"
        label="Group"
        value={contact.groupId}
        defaultOption="Select Group"
        options={allGroups}
        onChange={onChange} error={errors.groupId}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

ContactForm.propTypes = {
  contact: PropTypes.object.isRequired,
  allGroups: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default ContactForm;
