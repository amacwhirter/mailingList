import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import ButtonInput from '../common/Button';
import TextArea from '../common/TextArea';
import SelectInput from '../common/SelectInput';

const ComposeForm = ({email, allGroups, onSend, onChange, sending, errors}) => {
  return (
    <div>
    <form>
    <h1>Compose Message</h1>

      <SelectInput
        label="To:"
        name="group"
        defaultOption="Select Group"
        value={email.groupId}
        options={allGroups}
        onChange={onChange} />

      <TextInput
        name="subject"
        label="Subject:"
        placeholder="Enter Subject"
        value={email.subject}
        onChange={onChange}
        error={errors.subject}/>

      <TextArea
        name="message"
        label="Message:"
        value={email.message}
        placeholder="Enter Message Here"
        rows="10"
        onChange={onChange} />
    </form>
    <br />
      <input
        type="submit"
        disabled={sending}
        value={sending ? 'Sending...' : 'Send'}
        className="btn btn-primary"
        onClick={onSend}/>
      </div>
  );
};

ComposeForm.propTypes = {
  email: PropTypes.object.isRequired,
  allGroups: PropTypes.array.isRequired,
  onSend: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  sending: PropTypes.bool,
  errors: PropTypes.object
};

export default ComposeForm;
