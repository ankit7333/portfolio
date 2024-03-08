import React from 'react'
import PortfolioImage from '../PortfolioImage'

export default function About() {
    return (
        <section id="about" className={`flex flex-row flex-row-reverse max-w-screen-lg my-5 mx-auto shadow-md bg-white`}>
            <div className={`p-5 flex flex-col flex-auto w-70`}>
                <h4 className={`text-4xl font-bold mb-5`}>ABOUT ME</h4>
                <b className={`text-2xl font-light`}>I'm <span className={`font-bold`}>Ankit,</span> <span className={`font-light`}>UI/UX Developer</span></b>
                <p className={'my-2 text-lg text-sm'}>I have extensive experience as a Senior UI / UX Developer, and have worked the past 7 years in this position. Over the past 7 years of my career, I have worked both in large advertising companies, as well as for smaller think tank design firms. I offer only quality results and am extremely deadline driven.</p>
                <h5 className={`text-2xl font-bold`}>What I Do?</h5>
                <div className={`flex flex-col`}>
                    <span className={`text-lg font-bold`}>- Coding</span>
                    <span className={`text-lg font-bold`}>- Learning New Technology</span>
                    <span className={`text-lg font-bold`}>- Turf Cricket</span>
                    <span className={`text-lg font-bold`}>- Swimming</span>
                </div>
            </div>
            <PortfolioImage customClassName={`flex-none basis-1/4 w-30`} />
        </section>
    )
}

