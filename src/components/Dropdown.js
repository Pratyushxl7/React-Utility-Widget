import React from 'react';

const Dropdown = (props) => {

    const renderedItems= props.content.map((c) => {
        return (
            <div key={c.value} className="item">
                {c.label}
            </div>
        );
    });


    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a color</label>
                <div className="ui selection dropdown visible active"></div>
                <i className="dropdown icon"></i>\
                <div className="text">Select Color</div>
                <div className=",enu visible transition">
                    {renderedItems}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;