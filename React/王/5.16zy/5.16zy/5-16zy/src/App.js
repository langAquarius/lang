import React, { Component } from 'react';
import Arr from './Arr';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div className="App">
        <Arr arr={['ld','zxy','ly']}/>
        <Two two = {
          {
            name: 'ld',
            age: 18,
            hobby: ['play games', 'sports'], //数组中每一项必须为字符串
            other: {
              goodAt: ['study'], //数组中每一项必须为字符串
            }
          }
        }
        />
        <Three/>
        <Four four="1601E"/>
        <Five five={<Three/>}/>
      </div>
    );
  }
}

export default App;
