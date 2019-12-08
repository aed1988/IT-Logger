import React, { useState } from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css/dist/js/materialize';

const EditLogModal = () => {
  const [message, setMessage] = useState('');

  const [tech, setTech] = useState('');
  const [attention, setAttention] = useState(false);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter and message and tech' })
    } else {
      console.log(message, tech, attention);

      // Clear fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
  }

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className="modal-content">

        <h4>Edit System Log</h4>

        <div className="row">
          <div className="input-field">
            <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)}/>
            <label htmlFor="message" className='active'>Log Message</label>
          </div>
        </div>

      <div className="row">
        <div className="input-field">
          <select name="tech" value={tech} className='browser-default' onChange = {e => setTech(e.target.value)}>
            <option value="" disabled>Select technician</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Doe">Jane Doe</option>
            <option value="Ralph Corn">Ralph Corn</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="input-field">
          <p>
            <label>
              <input type="checkbox" className='filled-in' checked={attention} value={attention} onChange={e => setAttention(!attention)}/>
              <span>Needs attention</span>
            </label>
          </p>
        </div>
      </div>
    </div>

      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className='modal-close waves-effect blue darken-2 btn-flat'>Enter</a>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%'
}

export default EditLogModal