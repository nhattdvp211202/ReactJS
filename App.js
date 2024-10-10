import React from 'react';
import HelloWorld from './HelloWorld'; 
import UserGreeting from './UserGreeting'; 
import Counter from './Counter';
import Toggle from './Toggle';
import Form from './Form';
import NameList from './NameList';
import SearchableNameList from './SearchableNameList';
import SimpleClock from './SimpleClock';
import TodoList from './TodoList';

const App = () => {
  return (
    <div>
      <HelloWorld />
      <UserGreeting name="Tigren Clothings" />
      <Counter />
      <Toggle />
      <Form />
      <NameList />
      <SearchableNameList />
      <h1>Simple Clock Example</h1>
      <SimpleClock />
      <h1>Todo List Example</h1>
      <TodoList />
    </div>
  );
}

export default App;
