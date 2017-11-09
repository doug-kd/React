import React, { Component } from 'react';
import List from '../List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

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
fetch('/api/todos'),{
  headers: {
    'Content-Type': 'application/json',
       'Accept': 'application/json'
  }
}
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))
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
        <TextField
      value={this.state.term} onChange={this.onChange}
      hintText="Try"
      floatingLabelText="Add to your list here"
      floatingLabelFixed={true}
    />
      <RaisedButton type='submit' primary={true} style={true}>+</RaisedButton>
      </form>
      <List items={this.state.items} onComplete={this.onComplete}/>
    </div>
  )
}
};

export default App;
