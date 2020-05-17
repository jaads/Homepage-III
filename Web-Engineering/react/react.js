class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            totalclicked: 0,
            value: 0
        };
    };

    addTotalCount = () => {
        this.setState({ totalclicked: this.state.totalclicked + 1 });
    };

    increment = () => {
        this.setState({ value: this.state.value + 1 });
        this.addTotalCount();
    };

    decrement = () => {
        this.setState({ value: this.state.value - 1 });
        this.addTotalCount();
    };

    render() {
        return (
            <div>
                <p>Value: {this.state.value} </p>
                <p>Buttons pressed: {this.state.totalclicked}</p>
                <button onClick={this.decrement}> - 1</button >
                <button onClick={this.increment}>+ 1</button>
            </div >
        );
    };
};

ReactDOM.render(<Counter />, document.getElementById('reactapp'));