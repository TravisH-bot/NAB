import React, { useState } from "react";
import "./Registries.styles.css";
import PartyRegistry from "../../components/registry/Registry.component";
import Form from "../../components/form/Form.component";
import FilterButton from "../../components/filterButton/FilterButton.component";
import { nanoid } from "nanoid";

const PartyRegistries = (props) => {
  const [items, setItems] = useState(props.items);

  const toggleItemCompleted = (id) => {
    const updatedItems = items.map((item) => {
      //if the item has the same ID as the edited item
      if (id === item.id) {
        //using object spread to make a new object
        //whose `completed` prop has been inverted
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const deleteItem = (id) => {
    const remainingItems = items.filter((item) => id !== item.id);
    setItems(remainingItems);
  };

  const registryList = items.map((item) => (
    <PartyRegistry
      id={item.id}
      name={item.name}
      completed={item.completed}
      key={item.id}
      toggleItemCompleted={toggleItemCompleted}
      deleteItem={deleteItem}
    />
  ));

  const addItem = (name) => {
    const newItem = { id: `todo-${nanoid()}`, name, completed: false };
    setItems([...items, newItem]);
  };

  const itemsNoun = registryList.length !== 1 ? "items" : "item";
  const headingText = `${registryList.length} ${itemsNoun} remaining`;

  return (
    <>
      <div className="todoapp stack-large">
        <h1>Party Registry</h1>
        <Form addItem={addItem} />
        <div className="filters btn-group stack-exception">
          <FilterButton />
          <FilterButton />
          <FilterButton />
        </div>
        <h2 id="list-heading">{headingText}</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {registryList}
        </ul>
      </div>
    </>
  );
};

export default PartyRegistries;
