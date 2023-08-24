import React from 'react'
import FormWrapper from './FormWrapper'


type UserData = {
  firstName: string
  lastName: string
  age:string
}


type UserProps = UserData & {
  
  updateFields: (fields: Partial<UserData>) => void
}



function UserForm({firstName,lastName,age,updateFields} : UserProps) {
  return (
  <FormWrapper title='User Details'>
  <label>First Name</label>
  <input autoFocus required type="text" value={firstName} onChange={e => 
    
    updateFields({firstName:e.target.value})}/>
  <label>Last Name</label>
  <input required type='text' value={lastName}  onChange={e => 
    
    updateFields({firstName:e.target.value})}/>
  <label>Age</label>
  <input required min={1} type='number'value={age}  onChange={e => 
    
    updateFields({firstName:e.target.value})}/>
  </FormWrapper>
  )
}

export default UserForm
