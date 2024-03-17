import React from 'react';
import CustomCursor from  'hytech-component/CustomCursor';
import './App.css';

function App() {
  return (
    <CustomCursor
      cursor="none" 
      size="30px"
      transition="100ms"
      innerBorderSize="5px"
      midBorderSize="2px"
      outerBorderSize="8px"
      cursorClickColor="red"
      innerBorderColor="rgba(255, 255, 0, .25)"
      midBorderColor="rgba(255, 255, 255, .5)"
      outerBorderColor="rgb(255, 255, 0, .33)"
    />
  );
}

export default App;
