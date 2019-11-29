console.log("loaded");
function RadioInput(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onClick={props.onClick} value="No repeat"></input>
        <label className="form-check-label" for="inlineRadio1">No repeat</label>
    </div>///dobrato dokonczuc jutro
    );
  }
class ScheduleType extends React.Component
{
    render()
    {
    var element = (
        <div className="form-group row">
            <label for="schedule-name" className="col-sm col-form-label">Schedule</label>
            <div className="col-sm-10">     
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onClick={props.onClick} value="No repeat"></input>
                    <label className="form-check-label" for="inlineRadio1">No repeat</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Specific Date"></input>
                    <label className="form-check-label" for="inlineRadio2">Specific Date</label>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Daily"></input>
                <label className="form-check-label" for="inlineRadio2">Daily</label>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Weekly"></input>
                <label className="form-check-label" for="inlineRadio2">Weekly</label>
                </div>
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
    render()
    {
        var element = (
            <div className="form-group row ">
                <label for="schedule-name" className="col-sm col-form-label">Schedule</label>
                <div className="col-sm-10">     
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="No repeat"></input>
                        <label className="form-check-label" for="inlineRadio1">No repeat</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Specific Date"></input>
                        <label className="form-check-label" for="inlineRadio2">Specific Date</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Daily"></input>
                    <label className="form-check-label" for="inlineRadio2">Daily</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Weekly"></input>
                    <label className="form-check-label" for="inlineRadio2">Weekly</label>
                    </div>
                </div> 
            </div>
        );
    
        return(
            <div>{element}</div>
        );
    }

}
class Board extends React.Component {
    render() {
        console.log("board");
        return(
            <div>
                <ScheduleType
                //skonczuc
                    onClick={()=>this.props.onClick(i)}
                ></ScheduleType>
                <ScheduleBoard>
                    label=this.state.label
                </ScheduleBoard>
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
            label: "",
        };
    }

    exportReport(value)
    {
        switch(value)
        {
            case "No Repeat":
                break;
            case "Specific Date":
                break;
            case "Daily":
                break;
            case "Weekly":
                break;
        }

    }
    
    handleOnScheduleTypeClick()
    {

    }

    render()
    {
        return(
            <div>
                    <Board
                        label={this.state.label}
                    />
            </div>
        );

    }
}
function scheduleReactContainer() 
{
    ReactDOM.render(<Report />, document.getElementById("schedule-container"));
}
