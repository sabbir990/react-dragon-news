import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { AuthContext } from '../Providers/AuthProvider'
import { useContext } from 'react'

export default function Register() {

    const {createUser} = useContext(AuthContext)
    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        const registerFormData = new FormData(event.currentTarget);
        console.log(registerFormData.get('name'));

        createUser(registerFormData.get('email'), registerFormData.get('password')).then((result) => {
            console.log(result.user)
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <Navbar />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegisterSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='URL' placeholder="URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type='submit'>Register</button>
                        </div>
                        <p>Do you have an account already? <Link to={'/login'} className="text-blue-500 font-bold">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
