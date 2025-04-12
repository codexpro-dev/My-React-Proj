import React from 'react'
import {accordionData} from './components/Accordions/utils/content'
import Accordion from './components/Accordions/Accordion'

const App = () => {
  return (
    <div>
    <div className="accordion">
      {accordionData.map(({title, content}) => (
        <Accordion title={title} content={content} />
      ))}

    </div>
    </div>
  )
}

export default App
