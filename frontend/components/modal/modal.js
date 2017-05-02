import React from 'react';

export default ({ children }) => {
  return (
    <div className="modal">
      {children}
      <button>close</button>
    </div>
  );
};