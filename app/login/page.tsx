import React from 'react'

const page = () => {
  return (
    <div className="bg-base-200  min-h-screen  flex flex-col items-center justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-baseline justify-center p-6 max-w-screen mx-auto">
    <div className="text-left">
      <h1 className="text-4xl font-bold text-secondary">Member's Login</h1>
      <p className="py-6">
        Welcome back! Please enter your credentials to access your account. If you don't have an account, you can reach out to the admin.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-primary mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
  )
}

export default page