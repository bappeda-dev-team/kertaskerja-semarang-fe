// components/Loading.tsx
import React from 'react';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 z-50">
      <div className="loader">Loading...</div>
    </div>
  );
};

export default Loading;