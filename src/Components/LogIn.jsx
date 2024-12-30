import Lottie from 'lottie-react'
import React, { useContext } from 'react'
import Skeleton from '../Skeleton.json'
import { motion } from "motion/react"
import { NavLink, useNavigate } from 'react-router-dom'
import { ConText } from './ContextProvider'




export default function LogIn() {
  const {signInWithEmailAndPassword} = useContext(ConText)
    let navigate = useNavigate()
    function logInput(e){
        e.preventDefault()

        let password = e.target.password.value
        let email = e.target.email.value
        signInWithEmailAndPassword(email,password).then(res => {
          if(res.user){
            navigate('/')
          }
        }).catch(err => console.log(err))
      //   signInWithEmailAndPassword(email, password)
      // .then((res) => {
      //   console.log('User created successfully:', res.user);
      // })
      // .catch((err) => {
      //   console.error('Error creating user:', err);
      // });

        console.log(password,email);
        

    }
  return (
    <div className='w-11/12 mx-auto'>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold flex"> <motion.p
      animate={{color:['#34ebc0','#ebc634']}}
      transition={{duration:2,repeat:Infinity}}
      >Login now</motion.p> <motion.p animate={{x:100,rotate:360,color:['#34ebc0','#ebc634']}}
      transition={{duration:2,repeat:Infinity}}
      

      >!</motion.p> </h1>
      <p className="py-6 w-2/3">
        <Lottie animationData={Skeleton} />
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={logInput} className="card-body">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-black border-none bg-gradient-to-r from-violet-200 to-pink-200">Login</button>
        </div>
        <div className="divider">Or</div>
        <div className="form-control mt-6 flex justify-center items-center">
         <NavLink to='/'><button  className="btn btn-primary text-black border-none bg-gradient-to-r from-violet-200 to-pink-200">SingUp With Google</button></NavLink>
        </div>
      </form>
      <p className='text-center'> <span className='text-lg font-bold'>Don't Have An Account ? </span> <span onClick={()=>navigate('/singup')} className='text-red-400 font-bold cursor-pointer'>Sing Up</span></p>
      <p className='text-red-500'></p>
    </div>
  </div>
</div>
    </div>
  )
}
