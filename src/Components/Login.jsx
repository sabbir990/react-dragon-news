import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider'

export default function Login() {

    const location = useLocation();
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);
    console.log(location);

    const {signIn} = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        signIn(formData.get('email'), formData.get('password')).then((result) => {
            console.log(result.user)
        }).catch((error) => {
            console.log(error)
        })

        navigate(location?.state ? location.state : '/');

        console.log(user);
    }
    return (
        <div>
            <Navbar />
            <div className="hero-content flex-col lg:flex-row-reverse max-w-full">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type='submit'>Login</button>
                        </div>
                        <p>Don't you have an account? <Link to="/register" className="text-blue-500 font-bold">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
