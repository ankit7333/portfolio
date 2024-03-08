import React from 'react'
import PortfolioImage from '../PortfolioImage'

export default function Myself() {
    return (
        <section className={`flex flex-row max-w-screen-lg my-5 mx-auto shadow-md bg-white`}>
            <div className={`p-5 flex flex-col flex-1 justify-center`}>
                <h4 className={`text-lg font-bold`}>HI THERE!</h4>
                <b className={`text-2xl font-bold`}>I'M <span className={`text-yellow-300`}>ANKIT</span></b>
                <span className={`my-2`}>
                    <span className={`bg-yellow-300 p-1 font-medium`}>UI/UX Developer</span>
                </span>
                <p className={'text-lg text-sm'}>I have extensive experience as a Senior UI / UX Developer, and have worked the past 7 years in this position. Over the past 7 years of my career, I have worked both in large advertising companies, as well as for smaller think tank design firms. I offer only quality results and am extremely deadline driven.</p>
                <div className={`mt-3`}>
                    <a href="#about" className={`font-medium p-2 text-white rounded-full text-base bg-yellow-300 transition hover:shadow`}>MORE ABOUT ME</a>
                </div>
            </div>
            <PortfolioImage customClassName={`flex-1`} />
        </section>
    )
}

