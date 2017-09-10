import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const GroupForm = ({group, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Groups</h1>
      <TextInput
        name="name"
        label="Name"
        placeholder="Enter Group Name"
        value={group.name}
        onChange={onChange}
        error={errors.name}/>

      <TextInput
        name="location"
        label="Location"
        placeholder="Enter Group Location"
        value={group.location}
        onChange={onChange}
        error={errors.location}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

GroupForm.propTypes = {
  group: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default GroupForm;
