class Item extends React.Component {

    render() {
        return (
            <div className="board-item border">
                <p onClick={this.props.click}>{this.props.todo}</p>
                {<button onClick={this.props.click}>Next col</button>}
            </div>
        );
    };
};
