// src/components/Button.tsx

import React from 'react';

// Define the types of props the component will accept
interface ButtonProps {
  text: string; // The text that will be displayed on the button
  variant?: 'primary' | 'secondary' | 'default'; // Optional: The variant of the button
  onClick?: () => void; // Optional: The click event handler for the button
}

const Button: React.FC<ButtonProps> = ({ text, variant = 'default', onClick }) => {
  // Define the style based on the variant
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-purple-600',
    secondary: 'bg-secondary text-white hover:bg-orange-600',
    default: 'bg-neutral-200 text-neutral-800 hover:bg-neutral-300',
  };

  return (
    <button
      onClick={onClick} // Event handler when button is clicked
      className={`${variantClasses[variant]} py-2 px-4 rounded-md transition-all duration-300`}
    >
      {text} {/* Button Text */}
    </button>
  );
};

export default Button;
