import React from 'react'

const AddButton = () => {

  return (
    <>
      <div className='fixed-action-btn'>
        <a className="btn-floating btn-large waves-effect waves-light blue darken-2 modal-trigger" href='#add-log-modal'>
          <i className="material-icons">
            add
          </i>
        </a>
        <ul>
          <li>
            <a href="#tech-list-modal" className="btn-floating modal-trigger green">
              <i className="material-icons">person</i>
            </a>
          </li>
          <li>
            <a href="#add-tech-modal" className="btn-floating modal-trigger red">
              <i className="material-icons">person_add</i>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default AddButton
