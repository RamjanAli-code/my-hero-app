import React from 'react';

const Spin = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
    <div className="loader border-4 border-t-4 border-gray-200 border-t-violet-500 rounded-full w-12 h-12 animate-spin"></div>
  </div>
    );
};

export default Spin;