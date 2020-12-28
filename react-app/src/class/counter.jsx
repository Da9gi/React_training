import React from "react";

class NewCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    counterPlus = (e) => {
        //debugger;
        this.setState((prevCount) => {
            return { count: prevCount.count + 1 };
        });
    };

    counterMinus = (e) => {
        this.setState((prevCount) => {
            return { count: prevCount.count - 1 };
        });
    };

    reset = (e) => {
        this.setState((count) => {
            return { count: 0 };
        });
    };

    render() {
        return (
            <div>
                <button
                    onClick={(e) => {
                        this.counterPlus();
                    }}
                >
                    +
                </button>
                <button
                    onClick={(e) => {
                        this.counterMinus();
                    }}
                >
                    -
                </button>
                <button
                    onClick={(e) => {
                        this.reset();
                    }}
                >
                    Reset
                </button>
                <h1>Current Count: {this.state.count}</h1>
            </div>
        );
    }
}

export default NewCounter;
