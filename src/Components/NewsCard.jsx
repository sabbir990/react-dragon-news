import React from 'react'
import { Link } from 'react-router-dom';

export default function NewsCard({ news }) {
    const { image_url, details, title, _id } = news;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className='text-blue-500 font-bold'>Read More</Link></p> :
                        <p>{details}</p>

                }
            </div>
        </div>
    )
}
