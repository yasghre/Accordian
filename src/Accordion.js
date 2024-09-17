import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

function Accordion() {

    const [isOpen, setIsOpen] = useState(null);
    
    function handleToggle(index) {
        setIsOpen(index === isOpen ? null : index);
    }

    return <div className="accordion">
        
        {faqs.map((item, index) =>
            <div isOpen={isOpen} className="item" key={index} onClick={() => handleToggle(index)}>
                <p className="number">{index < 9 ? `0${index+1}` : index+1}</p>
                <p className="title">{item.title}</p>
                <p className="icon">{isOpen ? '+' : '-' }</p>
                {isOpen === index && <p className="content-box">{item.text}</p>}
            </div>
         )}
    </div>
}

export default Accordion;