import React, { Component } from 'react';
import ScheduleType from './schedule_board/schedule_type/schedule_type'
import ScheduleBoard from './schedule_board/schedule_board'

class Board extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            scheduleType: "No Repeat"
        }
    }
        
    handleOnScheduleTypeClick(value)
    {
        this.setState({
            scheduleType: value,
        });
        this.render();
    }

    render() {
        return(
            <div>
                <ScheduleType
                    onClick={value=>this.handleOnScheduleTypeClick(value)}
                />
                <ScheduleBoard
                    scheduleType ={this.state.scheduleType}
                />
            </div>
        );
      }
}
export default Board;
