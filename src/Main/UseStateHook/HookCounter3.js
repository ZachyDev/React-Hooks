import React, { useState } from 'react'

function HookCounter3() {
    const [user, setUser] = useState({ firstName: '', lastName: '' })
    return (
        <form>
            <input 
             type="text"  
             value = { user.firstName }
             onChange = { e => setUser({...user,firstName: e.target.value })}
             />
             <input 
             type="text"  
             value = { user.lastName }
             onChange = { e => setUser({...user,lastName: e.target.value })}
             />
             <h2>FirstName - { user.firstName }</h2>
             <h2>LastName  - { user.lastName }</h2>
             { JSON.stringify(user) }
        </form>
    )
}

export default HookCounter3
