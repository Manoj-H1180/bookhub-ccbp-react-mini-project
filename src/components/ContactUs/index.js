import {useRef} from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'

const ContactUs = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_yae9jca',
        'template_xifo3uq',
        form.current,
        '0Uc3r5k9TvbnKPatO',
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        },
      )
  }

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="user_name" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="user_email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  )
}

export default ContactUs

const StyledContactForm = styled.div`
  width: 400px;
  margin-top: 100px;
  margin-left: 450px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type='submit'] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`
