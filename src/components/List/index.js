import React from 'react'

const List = (props) => {
  const style = {
    complete: {
      backgroundColor: 'green'
    },
    incomplete: {
      backgroundImage: 'url(https://media.giphy.com/media/h0TPbr80IwoP6/giphy.gif)',
      backgroundSize: '100px',
      backgroundRepeat: 'no-repeat'
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
