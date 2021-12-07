import React from 'react';
import Table from './components/Table';

function App() {
  const array = ['mozzarella', 'gouda', 'cheddar'];

  return (
    <div className='App'>
      <h1>Schedule</h1>
      <Table products={array} />
    </div>
  );
}

export default App;
