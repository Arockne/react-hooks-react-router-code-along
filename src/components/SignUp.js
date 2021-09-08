import React from 'react'

function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div>
          <input type="password" name="matching-password" placeholder="Enter Password again" />
        </div>
        <input type="submit" value="New User"/>
      </form>
    </div>
  )
}

export default SignUp