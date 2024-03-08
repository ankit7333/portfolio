import React, {useState} from 'react'
import styles from './project.module.scss'
import ProjectDetail from '../ProjectDetail'


export default function Project() {
    const [isModal, setIsModal] = useState(false)
    const [isTitle, setIsTitle] = useState('')
    const [isContent, setIsContent] = useState('')
    const [isSkill, setIsSkill] = useState('')
    const [isHref, setIsHref] = useState('')
    const handleModalOpen = (index, data) => {
        setIsModal(!isModal)
        setIsTitle(data.name)
        setIsContent(data.content)
        setIsSkill(data.skill)
        setIsHref(data.href)
    }
    const handleModalClose = () => {
        setIsModal(false)
    }
    const projectObjs = [
        {
            image : '/free-listing.jpg',
            name : 'Free Listing',
            content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`,
            href : 'https://www.justdial.com/Free-Listing',
            skill : ['Next Js','HTML5','SCSS','Responsive Site', 'ADA']
        },
        {
            image : '/advertise.jpg',
            name : 'Advertising',
            content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`,
            href : 'https://www.justdial.com/Free-Listing',
            skill : ['Next Js','HTML5','SCSS','Responsive Site', 'ADA']
        },
        {
            image : '/billrecharge.jpg',
            name : 'Bill And Recharge',
            content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum has been the industry's`,
            href : 'https://www.justdial.com/Free-Listing',
            skill : ['Vanilla JavaScript','HTML','CSS','Adaptive Site']
        },
    ];
    return ( 
        <>   
            <div className={`grid gap-4 grid-cols-2 md:grid-cols-4`}>
                { projectObjs.map((data, index) => {
                return <figure key={index} className={`border rounded shadow hover:shadow-md flex flex-wrap p-2 animate-fade-in`}>
                    <img className={`flex-1 mb-2 w-full rounded`} src={data.image} alt="Free Listing Project" />
                    <figcaption className={`flex-1`}>
                        <h6 className={`text-xl font-semibold text-slate-700`}>{data.name}</h6>
                        <p className={`text-base font-medium text-slate-500 line-clamp-2 mb-2`}>{data.content}</p>
                        <button onClick={() => handleModalOpen(index, data)} className={`bg-emerald-50 inline-flex rounded p-1.5 text-base font-medium text-black transition-all hover:bg-slate-200`}>Learn More</button>
                    </figcaption>
                </figure>
                })}
            </div>
            <ProjectDetail title={isTitle} content={isContent} skill={isSkill.length > 0 ? isSkill.join(', '): ""} href={isHref} handleModalClose={handleModalClose} isModal={isModal} />
        </>
    )
}

