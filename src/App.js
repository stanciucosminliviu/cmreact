import React, {Component} from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {
  constructor(props) {
    super(props)

    this.childCheck = this.childCheck.bind(this)

    this.state={
      order: true
    }
  }

  childCheck(value){
    console.log('a intrat');
    this.setState({
      order: value
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter changeCheck = {this.childCheck}></Filter>
        <RecordTable order = {this.state.order}></RecordTable>
      </div>
    );
  }
}

export default App;
