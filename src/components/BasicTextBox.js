import React from 'react';

function BasicTextBox(props){
    return(
        <div className='TextContainer'>
            <h2>{props.BasicTextBox__Header}</h2>
            <p>{props.BasicTextBox__Contents}</p>
        </div>
    );
}
export default BasicTextBox;