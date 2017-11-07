import React, { Component } from 'react';
import List from '../List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      term: '',
      items: [],
    }
  }
onChange = (event) => {
this.setState({term: event.target.value})
}

onSubmit = (event) => {
  event.preventDefault()
  this.setState({
    term:'',
    items:[...this.state.items, {
      todo: this.state.term,
       complete:false
    }]
  })
}

onComplete = i =>{
  this.setState(prevState =>({
    items:[...prevState.items.slice(0,i),
      {todo:prevState.items[i].todo,
        complete:!prevState.items[i].complete
      },
      ...prevState.items.slice(i+1)
    ]
  }));
}


render () {
  return(
    <div>
      <form onSubmit={this.onSubmit}>
        <input value={this.state.term} onChange={this.onChange} />
        <RaisedButton primary={true} style={true}>+</RaisedButton>
        <TextField
      hintText="Hint Text"
      floatingLabelText="Fixed Floating Label Text"
      floatingLabelFixed={true}
    />
      </form>
      <List items={this.state.items} onComplete={this.onComplete}/>
    </div>
  )
}
}

export default App;
