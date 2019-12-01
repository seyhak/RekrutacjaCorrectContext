//////////////////////////REACT MODAL/////////////////////////////////////////////////////
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
    ReactDOM.render(<Report />, document.getElementById("schedule-container"));
}

//////////////////////////END OF REACT/////////////////////////////////////////////////////
//////////////////////////AJAX SENDER/////////////////////////////////////////////////////////////

class ExportedReport
{
    constructor()
    {
        this.reportName;
        this.format;
        this.email;
        this.scheduleType;
        this.scheduleDate;
        this.scheduleTime;
        this.scheduleDay;
        this.createJSON();
    }
    getJSON()
    {
        return JSON.stringify(this);
    }
    createJSON()
    {
        this.reportName = $("#report-name").val();
        this.format = $('input[name="formatRadioOptions"]').val();
        for(var i=0; i<this.format.length;i++)
        {
            if(this.format[i].checked)
            {
                this.format=this.format[i].val();
                break;
            }
        }
        this.email = $("#email").val();
        this.scheduleType = document.getElementsByName("scheduleType");
        for(var i=0; i<this.scheduleType.length;i++)
        {
            if(this.scheduleType[i].checked)
            {
                this.scheduleType=this.scheduleType[i].value;
                break;
            }
        }
        this.scheduleDate="";
        this.scheduleTime="";
        this.scheduleDay="";
        switch(this.scheduleType)
        {
            case "Specific Date":
                {
                    this.scheduleDate=$("#schedule-date").val();
                    this.scheduleTime=$("#schedule.time").val();
                    break;
                }
            case "Daily":
                {
                    this.scheduleTime=$("#schedule.time").val();
                    break;
                }
            case "Weekly":
                {
                    this.scheduleDay=$("#select-day").val();
                    break;
                }
            default:
                break;
        }
    }
}
class Sender
{
    static postReport()
    {   
        var user = new ExportedReport(); 
        var jsonFile = user.getJSON();
        var url = "https://postman-echo.com/post";
        $.ajax({
            method: "POST",
            url: url,
            timeout: 0,
            data: jsonFile,
            success: function(params) {
                alert("Export file request posted to postman-echo.com");
            },
        });
        url = "http://127.0.0.2:8000/rest/postman/";
        $.ajax({
            method: "POST",
            url: url,
            data: 'application/json',
            success: function(params) {
                alert("Export file request posted to Django Postman");
            },
            async: false,
        });
    }
}
//////////////////////////END OF AJAX/////////////////////////////////////////////////////////////
