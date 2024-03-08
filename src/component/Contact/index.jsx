import React from 'react'
import PortfolioImage from '../PortfolioImage'

export default function Resume() {
    return (
        <section className={`flex flex-row flex-row-reverse max-w-screen-lg my-5 mx-auto shadow-md bg-white`}>
            <div className={`p-5 flex flex-col flex-auto w-70`}>
                <h4 className={`text-4xl font-bold mb-5`}>Contact</h4>
                <div className={`text-2xl mb-5`}>Feel <b>free</b> to contact me!</div>
            </div>
            <PortfolioImage customClassName={`flex-none basis-1/4 w-30`} />
        </section>
    )
}

