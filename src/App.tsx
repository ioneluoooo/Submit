import { FormEvent, useState } from "react"
import AccountForm from "./AccountForm"
import AdressForm from "./AdressForm"
import UserForm from "./UserForm"
import { useMultistepForm } from "./useMultistepForm"


type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string

}

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',

}

function App() {

  const [data, setData] = useState(INITIAL_DATA)
  function updateFields( fields : Partial<FormData>){
setData(prev => {
  return {...prev,...fields}
})
  }
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } = useMultistepForm([


    <UserForm {...data}  updateFields={updateFields} />, <AdressForm {...data} updateFields={updateFields} />, <AccountForm {...data} updateFields={updateFields}/>
  ])
  function onSubmit(e: FormEvent) {
    e.preventDefault(); //prevents the behavior to refresh the page
    if (!isLastStep) return next()
    alert('Successful Account Creation')
  }

  return (
    <div style={{
      position: 'relative',
      background: 'white',
      border: '1px solid black',
      padding: '2rem',
      margin: '1rem',
      borderRadius: '.5rem',
      fontFamily: 'sans-serif',
      maxWidth:'max-content'

    }}>
      <form onSubmit={onSubmit}>
        <div style={{
          position: 'absolute', top: '.5rem', right: '.5rem'
        }}>

          {currentStepIndex + 1}/{steps.length}
          {/* we are starting from 0 so the first element will be the div = 0,so One */}

        </div>
        {step}
        <div style={{ marginTop: '1rem', display: 'flex', gap: '.5rem', justifyContent: 'flex-end' }}>

          {!isFirstStep && <button type="button" onClick={back}>Back</button>}

          {/* { currentStepIndex !== 0 && <button >Back</button>}
          if the current index is not equal to 0,render the button 
          that is one method to do it,but i'll do it from a hook*/}

          <button type="submit" >
            {isLastStep ? 'Finish' : 'Next'}
          </button>
        </div>
      </form>
    </div>)

}

export default App
