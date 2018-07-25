import React from 'react';

const validator = (props) => {
    const min_length = 5;
    let verdict = "Text too short";
    if (props.text.length >= min_length) {
        verdict = "Text long enough";
    }

    return (
        <div className="validator">
            <p> {verdict} </p>
        </div>
    )
}

export default validator;