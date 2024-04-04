"use client";
import { useState } from 'react';

export default function ProductDetails({ colors, sizes }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className="font-normal text-medium">Color</p>
        <div className="flex gap-2">
          {colors.map((color, index) => (
            <div key={index} className={`margin-0 p-0 rounded-full  place-self-center ${selectedColor === color ? 'w-12 h-12 border-4 border-gray border-spacing-2 border-double' : 'w-11 h-11 border-2 border-slate-400 border-solid  opacity-40'}`} >
                <button
                  aria-label={`Select color ${color}`} 
                  className={`h-10 w-10 bg-${color} rounded-full hover:opacity-80 ${selectedColor === color ? 'opacity-90' : 'opacity-40'}`} 
                  style={{ backgroundColor: color }} 
                  onClick={() => handleColorSelect(color)}
              ></button>
            </div>
            
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-normal text-medium">Size</p>
        <div className="grid grid-cols-4 gap-2 w-100">
          {sizes.map((size, index) => (
            <button 
              key={index} 
              aria-label={`Select size ${size}`}
              className={`py-2 rounded-md hover:bg-slate-100 ${selectedSize === size ? 'bg-slate-200 border-slate-600 border-double border-4' : 'border-slate-500 border-solid border-2 text-sl'}`} 
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
