import React from 'react'
import styles from './projectdetail.module.scss'


export default function ProjectDetail({isModal, handleModalClose, title, content, skill, href}) {
    // const skillSeperate = skill.join(', ');
    console.log(skill)
    return ( 
        <div className={`${!isModal ? 'hidden' : ''} fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center`}>
            <div className="bg-white p-2 rounded shadow-lg w-96 flex flex-col">
                <div className={`flex items-center justify-between`}>
                    <h6 className={`text-lg font-semibold`}>{title}</h6>
                    <button onClick={handleModalClose} className={`text-black rounded-full text-xs w-6 h-6 transition-all hover:text-white hover:bg-slate-300`}>&#x2715;</button>
                </div>
                <div className={`flex flex-col mb-2`}>
                    <p className={`text-base font-medium text-slate-500`}>{content}</p>
                    <p className={`text-base font-medium text-slate-500`}>{skill}</p>
                </div>
                <div className={`flex flex-col`}>
                    <a target="_blank" href={href} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center cursor-pointer`}>Go To Link</a>
                </div>
            </div>
        </div>
    )
}

