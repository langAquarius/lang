import React, { Component } from 'react';
import './App.css';
import Test from './components/pagination'
import Table from './components/table'
import K from './components/a'


class App extends Component {
  render() {
    let data=[];
    for(var i=0;i<50;i++){
      data.push({
        id:i,
        txt:"第三方的高度概括皇帝",
        con:"s顺丰顺丰的",
        con1:"顺丰顺丰的"+i
      })
    }
    let Txt= Test(Table)
    return (
      <div className="App">
        <Txt data={data} />
        <K/>
      </div>
    );
  }

}

export default App;
