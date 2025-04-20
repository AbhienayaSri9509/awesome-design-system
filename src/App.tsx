import React from "react";
import { ThemeProvider, useTheme } from "./theme/ThemeProvider";
import Badge from "./components/Badge/Badge";
import Sidebar from "./components/Sidebar/Sidebar";
import Tabs from "./components/Tabs/Tabs";
import Tooltip from "./components/Tooltip/Tooltip";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="absolute top-4 right-4 bg-primary text-white dark:bg-indigo-400 dark:text-black px-3 py-2 rounded-md"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

function App() {
  const tabs = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', content: <div>Content for Tab 2</div> },
    { label: 'Tab 3', content: <div>Content for Tab 3</div> },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background dark:bg-gray-900 text-textPrimary dark:text-white transition-colors">
        <Sidebar />
        <div className="ml-64 p-8">
          <DarkModeToggle />
          <h1 className="text-3xl font-bold mb-8">Awesome Design System 🚀</h1>

          <h2 className="text-xl font-semibold mb-4">Badges</h2>
          <div className="flex gap-4 mb-8">
            <Badge label="Primary" variant="primary" />
            <Badge label="Success" variant="success" />
            <Badge label="Error" variant="error" />
          </div>

          <h2 className="text-xl font-semibold mb-4">Tabs</h2>
          <Tabs tabs={tabs} />

          <h2 className="text-xl font-semibold mb-4 mt-8">Tooltip Example</h2>
          <Tooltip content="This is a tooltip!">
            <button className="mt-2 px-4 py-2 bg-primary text-white rounded-md">
              Hover Me
            </button>
          </Tooltip>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
