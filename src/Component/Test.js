import React from 'react';
import StickyFillDiv from './StickyDiv';

function App() {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        Navbar
      </nav>
      <StickyFillDiv />
      <div className="p-4">
        {/* Add content here to make the page scrollable */}
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i} className="mb-4">
            This is some scrollable content. Scroll down to see the sticky div change color.
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
