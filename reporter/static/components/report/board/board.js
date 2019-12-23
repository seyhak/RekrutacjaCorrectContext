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
