import React from 'react';
import ExampleComponent from './ExampleComponent';
import TestComponent from './TestComponent';

const App = () => {
  return (
    <div>
      <header>
        Now {/* Display "Now" instead of the current time */}
      </header>
      <ExampleComponent /> {/* Include ExampleComponent */}
      <TestComponent /> {/* Include TestComponent */}
    </div>
  );
};

export default App;
