class ScheduleBoard extends React.Component
{
    exportReport(value)
    {
        switch(value)
        {
            case "No Repeat":
                    var schedule = (
                        <div className="form-group row ninja">
                            <label htmlFor="schedule" className="col-sm col-form-label">Date</label>
                            <div className="col-sm-10">     
                                <div className="form form-inline">   
                                    <input className="form-input" type="date" name="schedule-date" id="schedule-date" placeholder="2019/05/22"></input>
                                    <label className="form-label col-sm-1" htmlFor="schedule-time">at</label>
                                    <input className="form-input col-sm-2" type="time" name="schedule-time" id="schedule-time" placeholder="13:00"></input>
                                </div>
                            </div>
                        </div> 
                    );  
                    return schedule;              
                break;
            case "Specific Date":
                    var schedule = (
                        <div className="form-group row ">
                            <label htmlFor="schedule" className="col-sm col-form-label">Date</label>
                            <div className="col-sm-10">     
                                <div className="form form-inline">   
                                    <input className="form-input" type="date" name="schedule-date" id="schedule-date" placeholder="2019/05/22"></input>
                                    <label className="form-label col-sm-1" htmlFor="schedule-time">at</label>
                                    <input className="form-input col-sm-2" type="time" name="schedule-time" id="schedule-time" placeholder="13:00"></input>
                                </div>
                            </div>
                        </div> 
                    );  
                    return schedule;    
                break;
            case "Daily":
                    var schedule = (
                        <div className="form-group row ">
                            <label htmlFor="schedule" className="col-sm col-form-label">Everyday at</label>
                            <div className="col-sm-10">     
                                <div className="form form-inline">
                                    <input className="form-input" type="time" name="schedule-time" id="schedule-time" placeholder="13:00"></input>
                                </div>
                            </div>
                        </div> 
                    );  
                    return schedule;    
                break;
            case "Weekly":
                    var schedule = (
                        <div className="form-group row ">
                            <label htmlFor="schedule" className="col-sm col-form-label">Every</label>
                            <div className="col-sm-10">     
                                <div className="form form-inline">
                                    <select className="select-day" id="select-day" defaultValue = "Wednesday">
                                        <option className="dropdown-item">Monday</option>
                                        <option className="dropdown-item">Tuesday</option>
                                        <option className="dropdown-item">Wednesday</option>
                                        <option className="dropdown-item">Thursday</option>
                                        <option className="dropdown-item">Friday</option>
                                        <option className="dropdown-item">Saturday</option>
                                        <option className="dropdown-item">Sunday</option>
                                    </select>
                                    <label className="form-label col-sm-1" htmlFor="schedule-time">at</label>
                                    <input className="form-input col-sm-2" type="time" name="schedule-time" id="schedule-time" placeholder="13:00"></input>

                                </div>
                            </div>
                        </div> 
                    );  
                    return schedule;    
                break;
        }

    }
    render()
    {
        var element = this.exportReport(this.props.scheduleType);
        return(
            
            <div>{element}</div>
        );
    }

}