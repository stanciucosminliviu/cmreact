import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {
constructor(props){
    super(props);
    this.state={
        checkAge: true,
        checkName: false
    }
}



handleCheck(isName){
   
    this.props.changeCheck(isName);
    if(!isName){
        this.setState({
            checkAge: false,
            checkName: true
        });
    }else{
        this.setState({
            checkName: false,
            checkAge: true
        }); 
    }
}

    render() {
        return (
        <div className="checkboxes">
            <Checkbox checked={this.state.checkAge} onChange={()=>this.handleCheck(true)}/>
            <label>Name</label>
            <Checkbox checked={this.state.checkName} onChange={()=>this.handleCheck(false)}/>
            <label>Age</label>
        </div>
        );
    }
}

export default Filter;