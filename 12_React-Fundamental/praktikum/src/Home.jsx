import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        console.log("unmount",this.props.title);
    }

    render() {
        return (
            <div className="p-3 border border-1"
            style={this.props.isRemove ? {fontWeight: "bold"} : {backgroundColor: "thin"}}
            onClick={this.props.handleChangeItemBackground}>
                {this.props.title}
            </div>
        )
    }
}

export default Home;