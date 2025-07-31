import React from 'react';
class Sum2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { errmsg: {} };
    }
    doValidation() {
        const { no1, no2 } = this.state //Accessing data from state
        var temperr = {} //Blank Object
        var isValid = true
        //Check Conidition for Textbox1
        if (!no1) {
            temperr.txt1 = "Enter No1"
            isValid = false
        }
        if (isNaN(no1)) {
            temperr.txt1 = "Enter Only Digits in No1"
            isValid = false
        }   //Check Conidition for Textbox1
        if (!no2) {
            temperr.txt2 = "Enter No2"
            isValid = false
        }
        //All Error will be assigned to State Object
        this.setState({ errmsg: temperr })
        //Return Data is Valid or Not +
        return isValid
    }

    doSum() {
        //Check Validation
        var ans = this.doValidation()
        if (ans == true) {
            var c = parseInt(this.state.no1) + parseInt(this.state.no2)
            this.setState({ msg: c })
        }
    }
    render() {
        return (
            <>
                <h1>Sum Demo</h1>
                No1 : <input type='text' onChange={(e) => this.setState({ no1: e.target.value })} /> <br />
                <p style={{ color: 'red' }}> {this.state.errmsg.txt1}</p>
                No2: <input type='text' onChange={(e) => this.setState({ no2: e.target.value })} /><br />
                <p style={{ color: 'red' }}>{this.state.errmsg.txt2}</p>
                <input type='button' value="+" onClick={this.doSum.bind(this)} />
                <br />
                {this.state.msg}
            </>
        );
    }
}

export default Sum2;