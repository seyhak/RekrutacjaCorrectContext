import React, { Component } from 'react';
import Board from './board/board';

//////////////////////////REACT MODAL/////////////////////////////////////////////////////

class Report extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
        };
    }


    render()
    {
        return(
            <div>
                    <Board
                    />
            </div>
        );

    }
}
function scheduleReactContainer() 
{
    console.log("reakcja");
    ReactDOM.render(<Report />, document.getElementById("schedule-container"));
}
export {Report};
