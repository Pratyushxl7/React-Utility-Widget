import React, {useState} from 'react';



const Accordian = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);


    const onTitleClick=(index)=>{
        setActiveIndex(index);
    };


    const renderedItems= props.content.map((each, index) => {

        const active = index === activeIndex ? 'active' : '';
            return (<React.Fragment key={each.question}>
            <div className={`title ${active}`} onClick={()=>{onTitleClick(index)}}>
                <i className="dropDown icon">
                </i>
                {each.question}
            </div>
            <div className={`content ${active}`}>
                <p>{each.answer}</p>
            </div>
        </React.Fragment>);
    });


return (<div className="ui styled accordion">
            {renderedItems}
        </div>
        );

};

export default Accordian;