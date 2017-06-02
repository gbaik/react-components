var GroceryListItem = (props) => (
  <div>
    <h2>Grocery List</h2>
      <ul> 
        <li>{props.grocery[0]} </li>
        <li>{props.grocery[1]} </li>
      </ul>
  </div>
);

ReactDOM.render(
  <GroceryListItem grocery={['Cucumbers', 'Kale']} />,
  document.getElementById('app')
);
