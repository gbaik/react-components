class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // Making the style conditional on our `state` lets us 
    // update it based on user interactions.
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.GroceryItems}</li>
    );
  }
}


var GroceryList = (props) => (
  <ul>
    {props.todos.map(GroceryItems =>
      <GroceryListItem key={GroceryItems} GroceryItems={GroceryItems} />
    )}
  </ul>
);


ReactDOM.render(<GroceryList todos = {['cucumber', 'kale']}/>, document.getElementById("app"));






// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);

//     // `state` is just an object literal
//     this.state = {
//       done: false
//     };
//   }

//   // When a list item is clicked, we will toggle the `done`
//   // boolean, and our component's `render` method will run again
//   onListItemClick() {
//     this.setState({
//       done: !this.state.done
//     });
//   }

//   render() {
//     // Making the style conditional on our `state` lets us 
//     // update it based on user interactions.
//     var style = {
//       textDecoration: this.state.done ? 'line-through' : 'none'
//     };

//     // You can pass inline styles using React's `style` attribute to any component
//     // snake-cased css properties become camelCased this this object
//     return (
//       <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
//     );
//   }
// }


// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(todo =>
//       <TodoListItem key={todo} todo={todo} />
//     )}
//   </ul>
// );


// ReactDOM.render(<TodoList todos = {['cucumber', 'kale']}/>, document.getElementById("app"));