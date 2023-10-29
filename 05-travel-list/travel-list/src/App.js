import { useState } from "react";


export default function App() {
  // items needs to be in the App parent so it can be passed from Form to Packing List
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(items=> [...items, item]);
  }


  function handleDeleteItem(id){
    setItems((items) =>items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id){
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed }
        : item)
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      {/* // items is added as a prop so it can be passed from the Form */}
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({onAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);


  function handleSubmit(e){
    e.preventDefault();

    if(!description) return;

    const newItem = {description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems (newItem);

    setDescription('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if(sortBy === 'input') sortedItems = items;

  if(sortBy === 'description') sortedItems = items
  .slice()
  .sort((a,b) => a.description.localeCompare(b.description));

  if(sortBy === 'packed') sortedItems = items
  .slice()
  .sort((a,b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          // Item = name of component;
          // item = name of prop;
          // {item} = object itself - argument of callback function in each iteration over the array
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={()=> onDeleteItem(items)}>Clear list</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)}/>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={()=> onDeleteItem(item.id)} >❌</button>
    </li>
  );
}

function Stats({ items }) {
if(!items.length) return <p className="stats">
  <em>Start adding some items to your packing list!</em>
</p>

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
        ? 'You got everything ready to go 🛫'
        : `You have ${numItems} items on your list and you already packed ${numPacked} (${percentage}%).`}
      </em>
    </footer>
  );
}
