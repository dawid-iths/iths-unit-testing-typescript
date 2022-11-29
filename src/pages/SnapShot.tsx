import React from 'react';

const SnapShot = () => {

  const divStyle = {
    display: 'flex',
    justifyContent: 'Right',
    alignItems: 'Right',
    height: '100vh'
  };

  return (
    <div style={divStyle}>
      <h1>This is for snap shot testing, try change text after snapshot test was run</h1>
    </div>
  );
};
  
export default SnapShot;