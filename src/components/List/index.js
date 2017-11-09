import React from 'react'

const List = (props) => {
  const style = {
    complete: {
      backgroundColor: 'green',
      fontFamily: 'Roboto, sans-serif'
  },
    incomplete: {
      backgroundColor: ''
    }
  };

  return (
    <ul>
      {props.items.map((item, index) => (
        <li style={style[item.complete
            ? 'complete'
            : 'incomplete']} key={index}>{item.todo}
          <button onClick={() => props.onComplete(index)}>{item.complete
              ? 'Done'
              : 'todo'}</button>
        </li>
      ))}
    </ul>
  )
};


export default List;
