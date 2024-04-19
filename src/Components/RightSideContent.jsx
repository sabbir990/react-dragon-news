import React from 'react'
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '../assets/qZone1.png';
import qzone2 from '../assets/qZone2.png';
import qzone3 from '../assets/qZone3.png';

export default function RightSideContent() {
    return (
        <div>
            <div className=' p-2'>
                <h2 className="text-2xl font-bold mb-4">Login With</h2>
                <div className='space-y-2'>
                    <button className='btn btn-outline w-full border-blue-500 text-blue-500'><FaGoogle /> Login With Google</button>
                    <button className='btn btn-outline w-full border-black-500 text-black-500'><FaGithub /> Login With GitHub</button>
                </div>
            </div>
            <br /><br /><br />
            <div className='p-2'>
                <h2 className="text-2xl font-bold mb-4">Find us on</h2>
                <div>
                    <button className='flex items-center space-x-1 btn btn-outline w-full justify-start'><FaFacebook /> <span>Facebook</span></button>
                    <button className='flex items-center space-x-1 btn btn-outline w-full justify-start'><FaTwitter /> <span>Twitter</span></button>
                    <button className='flex items-center space-x-1 btn btn-outline w-full justify-start'><FaInstagram /> <span>Instagram</span></button>
                </div>
            </div>
            <br /><br /><br />
            <div className='bg-gray-300 p-2'>
                <h2 className="text-2xl font-bold mb-4">Q-Zone</h2>
                <div className=' space-y-2 '>
                    <img src={qzone1} alt="" />
                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
                </div>
            </div>
        </div>
    )
}
