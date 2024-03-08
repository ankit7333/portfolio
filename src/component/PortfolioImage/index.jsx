import React from 'react'

export default function PortfolioImage({customClassName}) {
    return (    
        <div className={`flex flex-col ${customClassName}`}>
            <img src="/profile_placeholder.jpg" alt="Profile Image" />
        </div>
    )
}

