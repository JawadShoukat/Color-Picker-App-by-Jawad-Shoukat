"use client"
import { useState } from 'react';

const colors = [
  { name: 'Red', value: '#FF0000' },
  { name: 'Orange', value: '#FFA500' },
  { name: 'Yellow', value: '#FFFF00' },
  { name: 'Green', value: '#008000' },
  { name: 'Blue', value: '#0000FF' },
  { name: 'Purple', value: '#800080' },
];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const [customColor, setCustomColor] = useState('');

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomColor(e.target.value);
  };

  const handleCopyHexCode = () => {
    navigator.clipboard.writeText(selectedColor);
    alert('Hex code copied to clipboard!');
  };

  return (
    <div className='bg-purple-400'>
    <div className=" max-w-3xl mx-auto p-8 rounded-lg shadow-md" style={{ backgroundImage: 'linear-gradient(to bottom, #33ccff, #ff99cc)' }}>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Color Picker</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        {colors.map((color) => (
          <div
            key={color.name}
            className={`w-24 h-24 rounded-lg ${selectedColor === color.value ? 'ring-4 ring-offset-4 ring-blue-500' : ''} flex justify-center items-center`}
            style={{ backgroundColor: color.value }}
            onClick={() => handleColorChange(color.value)}
          >
            <p className="text-lg font-bold text-white">{color.value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col mb-8">
        <label className="text-lg font-bold text-gray-800 mb-2">Custom Color:</label>
        <input
          type="color"
          value={customColor}
          onChange={handleCustomColorChange}
          className="w-full h-10 rounded-lg"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
          onClick={() => handleColorChange(customColor)}
        >
          Apply Custom Color
        </button>
      </div>
      <div className="flex flex-col mb-8">
        <label className="text-lg font-bold text-gray-800 mb-2">Selected Color:</label>
        <div
          className="w-24 h-24 rounded-lg"
          style={{ backgroundColor: selectedColor }}
        />
        <p className="text-lg font-bold text-gray-800 mt-2">Hex Code: {selectedColor}</p>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
          onClick={handleCopyHexCode}
        >
          Copy Hex Code
        </button>
      </div>
    </div>
    </div>
  );
};

export default ColorPicker;