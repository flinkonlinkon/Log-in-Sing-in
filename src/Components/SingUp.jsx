import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ConText } from './ContextProvider'

export default function SingUp() {
let {signUp} = useContext(ConText)
    let navigate = useNavigate()
  
    
       function handleSingup(e){
    e.preventDefault()
    let email = e.target.email.value
    let name = e.target.name.value
    let password = e.target.password.value
    let photo = e.target.photo.value

    signUp(email,password).then(res =>{
      if(res.user){
        navigate('/')
      }
    })

    console.log(name,password,photo,email);
    

   
  }



  return (
    <>
    
    <div className='w-11/12 mx-auto'>
      <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-3">
      <form onSubmit={handleSingup} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-black border-none bg-gradient-to-r from-violet-200 to-pink-200">Register</button>
        </div>
        <div className="divider">Or</div>
        <div className="form-control mt-6 flex justify-center items-center">
         <NavLink to='/'><button  className="btn btn-primary text-black border-none bg-gradient-to-r from-violet-200 to-pink-200">SingUp With Google</button></NavLink>
        </div>
      </form>
      <p className='text-center'> <span className='text-lg font-bold'>Allready Have An Account ? </span> <span onClick={()=>navigate('/login')} className='text-red-400 font-bold cursor-pointer'>Log In</span></p>
      <p className='text-red-500'></p>
    </div>
  </div>
</div>
    </div>
    </>
    
  )
}
