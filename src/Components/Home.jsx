import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import LeftSideContent from './LeftSideContent'
import RightSideContent from './RightSideContent'
import BreakingNewsComponent from './BreakingNewsComponent'
import { useLoaderData } from 'react-router-dom'
import NewsCard from './NewsCard'

export default function Home() {
    const newsData = useLoaderData();
    return (
        <div>
            <Header />
            <BreakingNewsComponent />
            <Navbar />
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <div>
                    <LeftSideContent />
                </div>
                <div className='col-span-2 space-y-4'>
                    {
                        newsData.map((aNews) => {
                            return(
                                <NewsCard news={aNews}/>
                            )
                        })
                    }
                </div>
                <div>
                    <RightSideContent />
                </div>
            </div>
        </div>
    )
}
