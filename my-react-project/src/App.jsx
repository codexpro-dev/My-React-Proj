import React from "react";
import { accordionData } from "./components/Accordions/utils/content";
import Accordion from "./components/Accordions/Accordion";
import Form from "./components/Form Validation/Form";

const App = () => {
  return (
    <div>
      {/* <div className="accordion">
      {accordionData.map(({title, content}) => (
        <Accordion title={title} content={content} />
      ))}
    </div> */}

    <Form />
    </div>
  );
};

export default App;
