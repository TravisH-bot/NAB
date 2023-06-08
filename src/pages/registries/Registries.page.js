import React from "react";
import "./Registries.styles.css";
import PartyRegistry from "../../components/registry/Registry.component";
import Form from "../../components/form/Form.component";
import FilterButton from "../../components/filterButton/FilterButton.component";

const PartyRegistries = (props) => {
  const registryList = props.registries?.map((registry) => (
    <PartyRegistry
      id={registry.id}
      name={registry.name}
      completed={registry.completed}
      key={registry.id}
    />
  ));
  return (
    <>
      <div className="todoapp stack-large">
        <h1>Party Registry</h1>
        <Form />
        <div className="filters btn-group stack-exception">
          <FilterButton />
          <FilterButton />
          <FilterButton />
        </div>
        <h2 id="list-heading">3 items remaining</h2>
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
