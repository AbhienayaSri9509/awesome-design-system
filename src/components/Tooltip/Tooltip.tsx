import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-3 py-2 text-white text-sm rounded-md bg-gray-800 opacity-0 transition-opacity duration-300"
        style={{ visibility: show ? 'visible' : 'hidden', opacity: show ? 1 : 0 }}
      >
        {content}
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="cursor-pointer"
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
