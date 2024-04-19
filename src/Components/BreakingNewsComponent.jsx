import React from 'react';
import Marquee from "react-fast-marquee";

export default function BreakingNewsComponent() {
    return (
        <div className='flex p-2 bg-gray-300 border border-black rounded-lg'>
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    )
}
