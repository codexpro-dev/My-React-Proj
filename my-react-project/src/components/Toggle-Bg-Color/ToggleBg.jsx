import React, { useState } from 'react'
import '../Toggle-Bg-Color/bgColToggler.css'

const ToggleBg = () => {
    const [backgroundColor, setBgCol] = useState('white')
    const [textColor, setTextColor] = useState('#1b1b1b')
    const [buttonStyle, setButtonStyle] = useState('white')

    const handleClick = () => {
        setBgCol(backgroundColor === 'white' ? '#1b1b1b' : 'white')
        setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b')
        setButtonStyle(backgroundColor === 'white' ? '#1b1b1b' : 'white')
    }
  return (
    <div style={{backgroundColor, color: textColor}}>
        <button onClick={handleClick} style={{buttonStyle, color: textColor, border: `2px solid ${textColor}`}}>
            {backgroundColor == '#1b1b1b' ? 'Black Theme' : 'White Theme' }
        </button>
      <section className='content'>
      <h1>Yoga-Sashihi <br /> Welcome To The World Of Yoga </h1>
      </section>
      
    </div>
  )
}

export default ToggleBg
