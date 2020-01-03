import React, { Component } from 'react';

function RadioInput(props) {
    return (
    <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="scheduleType" id={props.id} onChange={props.onClick} value={props.label} defaultChecked={props.checked}></input>
        <label className="form-check-label" htmlFor={props.id}>{props.label}</label>
    </div>
    );
  }
class ScheduleType extends React.Component
{
    renderRadioInput(id,label,checked=false)
    {
        id = "inlineRadio"+id;
        return(
            <RadioInput
                id = {id}
                label = {label}
                onClick = {() => this.props.onClick(label)}
                checked = {checked}
            />
        );

    }
    render()
    {
    var element = (
        <div className="form-group row">
            <label htmlFor="schedule-name" className="col-sm col-form-label">Schedule</label>
            <div className="col-sm-10">     
                {this.renderRadioInput(0,"No Repeat",true)}
                {this.renderRadioInput(1,"Specific Date")}
                {this.renderRadioInput(2,"Daily")}
                {this.renderRadioInput(3,"Weekly")}
            </div> 
        </div>
    );

    return(
        <div>{element}</div>
    );
    }
}
export default ScheduleType;