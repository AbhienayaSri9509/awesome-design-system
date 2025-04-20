import React, { useState } from 'react';
import { useTheme } from '../../theme/ThemeProvider';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { darkMode } = useTheme();

  return (
    <div className={`w-${collapsed ? '16' : '64'} h-screen bg-gray-800 text-white dark:bg-gray-900 transition-all`}>
      <div className="flex items-center justify-between px-4 py-2">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 text-white bg-primary dark:bg-indigo-500 rounded-md"
        >
          {collapsed ? 'Expand' : 'Collapse'}
        </button>
      </div>
      <div className="mt-4">
        <ul>
          <li className="px-4 py-2 hover:bg-primary dark:hover:bg-indigo-500">
            <a href="#">Home</a>
          </li>
          <li className="px-4 py-2 hover:bg-primary dark:hover:bg-indigo-500">
            <a href="#">Settings</a>
          </li>
          <li className="px-4 py-2 hover:bg-primary dark:hover:bg-indigo-500">
            <a href="#">Profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
