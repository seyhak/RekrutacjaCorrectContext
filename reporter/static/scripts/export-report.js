//////////////////////////////////////CSRF code/////////////////////////////
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  
  function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
  }
  //  $ajaxSetup - Sets the default values for future AJAX requests, beforeSend: runs function before sending reequest
  $.ajaxSetup({
    beforeSend: function(xhr, settings) 
    {     
        var csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
  });
//////////////////////////END OF CSRF CODE///////////////////////////////////////////
//////////////////////////REACT/////////////////////////////////////////////////////
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
                {this.renderRadioInput(0,"No repeat",true)}
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
//////////TODO: ogarnąć błąd z wysyłaniem na strone, pola required i niewidzialność bloku No reminder.
class ScheduleBoard extends React.Component
{
    exportReport(value)
    {
        switch(value)
        {
            case "No Repeat":
                    const divStyle = {
                        visibility: 'hidden',
                    };
                    var schedule = (
                        <div className="form-group row " style={divStyle}>
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
//////////////////////////AJAX/////////////////////////////////////////////////////////////

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
        console.log(this.scheduleType);
        
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
        var csrftoken = getCookie('csrftoken');
        var user = new ExportedReport(); 
        var jsonFile = user.getJSON();
        var url = "https://postmanecho.com/post";
        console.log(jsonFile);
        $.ajax({
            type: "POST",
            url: url,
            CSRF: csrftoken,
            data: jsonFile,
            contentType: "application/json",
          });
        console.log("posted");
    }
}

function postReport(url,idVariablesArray=[])
{
  var csrftoken = getCookie('csrftoken');
  var user = new Object; 
  var jsonFile;
  $.getJSON(url,function(data)
  {
    jsonFile=JSON.stringify(data);
    jsonFile = getJsonObjectWithDataFromHTML(idVariablesArray,jsonFile);
    console.log(jsonFile);
    $.ajax({
      type: "PUT",
      url: url,
      CSRF: csrftoken,
      data: jsonFile,
      contentType: "application/json",
    });
  });
}
//////////////////////////END OF AJAX/////////////////////////////////////////////////////////////
