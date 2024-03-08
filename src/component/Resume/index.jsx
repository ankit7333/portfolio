import React from 'react'
import PortfolioImage from '../PortfolioImage'

export default function Resume() {
    return (
        <section className={`flex flex-row flex-row-reverse max-w-screen-lg my-5 mx-auto shadow-md bg-white`}>
            <div className={`p-5 flex flex-col flex-auto w-70`}>
                <h4 className={`text-4xl font-bold mb-5`}>RESUME</h4>
                <h5 className={`text-2xl font-bold mb-5`}>EDUCATION</h5>
                <div className={`flex`}>
                    <div className={`flex flex-col flex-1`}>
                        <div>
                            <b className={`bg-yellow-300 p-1 font-medium`}>2009 - 2013</b>
                        </div>
                        <div className={`my-2`}>
                            <b className={`font-medium`}>Diploma - Computer Engineer</b>
                        </div>
                        <div>
                            <p>I compeleted my three years computer engineering diploma from MIT WPU School of Polytechnic and Skill development Pune.
                            </p>
                        </div>
                    </div>
                    <div className={`flex flex-col flex-1`}>
                        <div>
                            <b className={`bg-yellow-300 p-1 font-medium`}>2008 - 2009</b>
                        </div>
                        <div className={`my-2`}>
                            <b className={`font-medium`}>HSC - Science</b>
                        </div>
                        <div>
                            <p>I compeleted my 12th from Anjuman Islam Janjira Degree College of Science, Murud.
                            </p>
                        </div>
                    </div>
                    <div className={`flex flex-col flex-1`}>
                        <div>
                            <b className={`bg-yellow-300 p-1 font-medium`}>2007 - 2008</b>
                        </div>
                        <div className={`my-2`}>
                            <b className={`font-medium`}>SSC - 10th</b>
                        </div>
                        <div>
                            <p>I compeleted my 10th STD from Dr AR Undre English High School, Raigad.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className={`my-2`} />
                <h5 className={`text-2xl font-bold mb-5`}>EXPERIENCE</h5>
                <div className={`grid gap-5 grid-cols-3`}>
                    <div className={`flex flex-col flex-1`}>
                        <div>
                            <b className={`bg-yellow-300 p-1 font-medium`}>2022 Present</b>
                        </div>
                        <div className={`my-2`}>
                            <b className={`font-medium`}>Sr UI / UX Developer</b>
                        </div>
                        <div>
                            <p>In <b>Justdial Pvt Ltd</b> Currently working on React.js and Next.js Project Frontend Theming</p>
                        </div>
                    </div>
                    <div className={`flex flex-col flex-1`}>
                        <div>
                            <b className={`bg-yellow-300 p-1 font-medium`}>2020 - 2022</b>
                        </div>
                        <div className={`my-2`}>
                            <b className={`font-medium`}>Sr UI Developer</b>
                        </div>
                        <div>
                            <p>In <b>Iksula Services</b> I was working on Magento 2 Frontend Theming</p>
                        </div>
                    </div>
                    <div className={`flex flex-col flex-1`}>
                        <div>
                            <b className={`bg-yellow-300 p-1 font-medium`}>2016 - 2020</b>
                        </div>
                        <div className={`my-2`}>
                            <b className={`font-medium`}>Jr UI Developer</b>
                        </div>
                        <div>
                            <p>In <b>Justdial Pvt Ltd</b> I was working on UI Theming</p>
                        </div>
                    </div>
                    <div className={`flex flex-col flex-1`}>
                        <div>
                            <b className={`bg-yellow-300 p-1 font-medium`}>2015 - 2016</b>
                        </div>
                        <div className={`my-2`}>
                            <b className={`font-medium`}>Web Designer Cum Developer</b>
                        </div>
                        <div>
                            <p>In <b>Transpacific Software</b> I was working on Magento 1 Frontend Theming</p>
                        </div>
                    </div>
                    <div className={`flex flex-col flex-1`}>
                        <div>
                            <b className={`bg-yellow-300 p-1 font-medium`}>2014 - 2015</b>
                        </div>
                        <div className={`my-2`}>
                            <b className={`font-medium`}>Web Designer</b>
                        </div>
                        <div>
                            <p>In <b>Woo Advertising</b> I was working on Raw HTML and CSS Frontend Theming</p>
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioImage customClassName={`flex-none basis-1/4 w-30`} />
        </section>
    )
}

