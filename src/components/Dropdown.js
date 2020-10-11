import React from 'react';

const Dropdown = (props) => {

    const renderedItems= props.content.map((c) => {

        if(c.value === props.selected.value)
        {
            return null;
        }
        return (
            <div 
            key={c.value} 
            className="item"
            onClick={()=>props.onSelectedChange(c)}>
                {c.label}
            </div>
        );
    });


    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
    <div className="text">{props.selected.label}</div>
                    <div className="menu visible transition">{renderedItems}</div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;