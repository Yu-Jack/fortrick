import React from 'react';
import ReactDOM from 'react-dom';

let stringToHex = (string) => {
    let temp ="";
    for( var i in string){
        temp += string[i].charCodeAt(0).toString(16);
    }
    return temp;
}

let hexToString = (hexx) => {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            encodeurl: 'Type Somethings',
            decodeurl: 'Type Somethings',
            stringtohex: 'Type Somethings',
            hextostring: 'Type Somethings'
        }
    }

    handelInput(e) {
        this.setState({
            encodeurl: encodeURI(e.target.value),
            decodeurl: decodeURI(e.target.value),
            stringtohex: stringToHex(e.target.value),
            hextostring: hexToString(e.target.value)
        });
    }

    render() {
        let inputStyle = {
            width: '100%'
        }
        let segmentStyle = {
            'word-break' : 'break-all'
        }
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <a className="item">
                        Just
                    </a>
                    <a className="item">
                        For
                    </a>
                    <a className="item">
                        Fun
                    </a>
                </div>
                <div className="ui grid">
                    <div className="sixteen wide column centered">
                        <div className="ui input" style={inputStyle}>
                            <input type="text" onChange={this.handelInput.bind(this)}></input>
                        </div>
                        <div className="ui segment" style={segmentStyle}>
                            <h4 className="ui header">Encode URL</h4>
                            {this.state.encodeurl}
                        </div>
                        <div className="ui segment" style={segmentStyle}>
                            <h4 className="ui header">Decode URL</h4>
                            {this.state.decodeurl}
                        </div>
                        <div className="ui raised segment" style={segmentStyle}>
                            <h4 className="ui header">String to Hex </h4>
                            {this.state.stringtohex}
                        </div>
                        <div className="ui raised segment" style={segmentStyle}>
                            <h4 className="ui header">Hex to String</h4>
                            {this.state.hextostring}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(< Layout />, document.getElementById("content"));
