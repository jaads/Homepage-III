class Board extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [
                { text: "focus", state: 1 },
                { text: "learn react", state: 2 },
                { text: "clean up", state: 0 },
                { text: "take break", state: 0 }
            ]
        };
    };

    // Using an anonymous arrow function to bind 'this' correctly
    nextCol = (itemIndex) => {
        // Best practice: the immutable way
        let itemscopy = [...this.state.items];
        itemscopy[itemIndex].state++;
        this.setState({ items: itemscopy });
    };

    render() {
        return (
            <div id="theboard" className="border">
                <div id="firstCol">
                    <h4>to do</h4>
                    {this.state.items.map((item, idx) => {
                        if (item.state == 0) {
                            return <Item
                                // Passing method reference down to the component - nice
                                click={() => this.nextCol(idx)}
                                todo={item.text}
                                key={item.text} />
                        }
                    })}
                </div>
                <div id="secondCol">
                    <h4>in progress</h4>
                    {this.state.items.map((item, idx) => {
                        if (item.state == 1) {
                            return <Item
                                click={() => this.nextCol(idx)}
                                todo={item.text}
                                key={item.text} />
                        }
                    })}
                </div>
                <div id="thirdCol">
                    <h4>done</h4>
                    {this.state.items.map((item, idx) => {
                        if (item.state == 2) {
                            return <Item
                                click={() => this.nextCol(idx)}
                                todo={item.text}
                                key={item.text} />
                        }
                    })}
                </div>
            </div>
        );
    };
};

ReactDOM.render(<Board />, document.querySelector('#board'));
