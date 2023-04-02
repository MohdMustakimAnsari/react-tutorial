import React, { useState } from 'react'


// console.log(useState("Enter text here"))

export default function TextForm(props) {
    const handleClick = () => {
        console.log("UpperCase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log("OnChange")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here");
    // setText("Please enter text here");
    return (
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Convert to UpperCase</button>
        </div>
    )
}
