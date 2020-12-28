import React from 'react'
import 'react-responsive-modal/styles.css'
import { useForm } from 'react-hook-form'
import { Modal } from 'react-responsive-modal'

const AppointmentFrom = ({ onCloseModal, open, onOpenModal }) => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    fetch('http://localhost:5001/userAppointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert('Appointment created successfully!')
          onCloseModal();
        }
      })
  }

  return (
    <div>
      <Modal open={open} center>
        <h3>Please provide your necessary information</h3>
        <div
          style={{
            backgroundColor: '#3A4256',
            color: 'white',
            padding: '1rem',
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              style={{
                height: '50px',
                width: '100%',
                borderRadius: '5px',
                border: 'none',
              }}
              name="name"
              ref={register({ required: true })}
              placeholder="Patient Name"
            />{' '}
            <br /> <br />
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              type="gmail"
              style={{
                height: '50px',
                width: '100%',
                borderRadius: '5px',
                border: 'none',
              }}
              name="email"
              ref={register({ required: true })}
              placeholder="Email"
            />
            <br /> <br />
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              type="number"
              style={{
                height: '50px',
                width: '100%',
                borderRadius: '5px',
                border: 'none',
              }}
              name="phoneNumber"
              ref={register({ required: true })}
              placeholder="Please provide an active phone number"
            />{' '}
            <br /> <br />
            {errors.exampleRequired && <span>This field is required</span>}
            <div className="d-flex">
              <select
                style={{
                  height: '50px',
                  width: '100%',
                  borderRadius: '5px',
                  border: 'none',
                }}
                name="gender"
                ref={register}
              >
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
              <input
                type="number"
                style={{
                  width: '100%',
                  borderRadius: '5px',
                  border: 'none',
                  marginLeft: '10px',
                }}
                name="age"
                ref={register({ required: true })}
                placeholder="Age"
              />{' '}
              <br />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>{' '}
            <br /> <br />
            <input type="submit"></input>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default AppointmentFrom
