import React from 'react'
import PortfolioImage from '../PortfolioImage'
import Project from '../Project'

export default function Portfolio() {
    return (
        <section className={`flex flex-row flex-row-reverse max-w-screen-lg my-5 mx-auto shadow-md bg-white`}>
            <div className={`p-5 flex flex-col flex-auto w-70 `}>
                <h4 className={`text-4xl font-bold mb-5`}>PORTFOLIO</h4>
                <Project />
            </div>
            <PortfolioImage customClassName={`flex-none basis-1/4 w-30`} />
        </section>
    )
}

