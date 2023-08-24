import React from 'react'
import FormWrapper from './FormWrapper'
type AccountData = {
 email:string
 password:string
}


type AccountProps = AccountData & {
  
  updateFields: (fields: Partial<AccountData>) => void
}
function AccountForm({email,password,updateFields}:AccountProps) {
  return (
   <FormWrapper title='Account Creation'>
   <label>Email</label>
   <input autoFocus required type='email'value={email} onChange={e => 
    
    updateFields({email:e.target.value})}/>
   <label>Password</label>
   <input required type='password' value={password} onChange={e => 
    
    updateFields({password:e.target.value})}/>
   </FormWrapper>
  )
}

export default AccountForm
