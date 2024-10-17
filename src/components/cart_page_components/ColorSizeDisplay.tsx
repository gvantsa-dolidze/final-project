import React from 'react';

interface ColorSizeDisplayProps {
  color?: string; 
  size?: string; 
}

const ColorSizeDisplay: React.FC<ColorSizeDisplayProps> = ({ color = 'green-700', size = 's' }) => {
  return (
    <div className="flex gap-2 items-center">
      <span>Color:</span>
      <div className={`bg-${color} w-3 h-3 rounded-full`}></div>
      <span>- Size: {size}</span>
    </div>
  );
};

export default ColorSizeDisplay;

