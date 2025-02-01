import { useState } from 'react';

function RandomColorGenerator() {
  const [bgColorValue, setBgColorValue] = useState('#dcc4d9');
  const [colorOption, setColorOption] = useState('hex');

  function generateRandomColor() {
    let selectedColor;
    if (colorOption === 'rgb') {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      selectedColor = `rgb(${r}, ${g}, ${b})`.toUpperCase();
    } else if (colorOption === 'hex') {
      let randHexColor = Math.floor(Math.random() * 16777215).toString(16);
      selectedColor = `#${randHexColor}`.toUpperCase();
    }
    setBgColorValue(selectedColor);
  }

  function changeColorOption(selectedColorOption) {
    if (colorOption !== selectedColorOption) {
      setColorOption(selectedColorOption);
    }
  }

  return (
    <>
      <div
        className='flex flex-col justify-center items-center space-y-10 h-screen'
        style={{ backgroundColor: bgColorValue }}
      >
        <div className='flex flex-row gap-5 mx-auto p-4 font-semibold text-black'>
          <button
            className='bg-amber-300 hover:bg-amber-400 px-4 py-2 rounded-lg cursor-pointer outline'
            onClick={generateRandomColor}
          >
            Generate a random color
          </button>
          <button
            className={`hover:bg-amber-200 px-4 py-2 rounded-lg cursor-pointer outline ${
              colorOption === 'hex' ? 'bg-amber-300' : 'bg-amber-100'
            }`}
            onClick={() => changeColorOption('hex')}
          >
            Show HEX value
          </button>
          <button
            className={`hover:bg-amber-200 px-4 py-2 rounded-lg cursor-pointer outline ${
              colorOption === 'rgb' ? 'bg-amber-300' : 'bg-amber-100'
            }`}
            onClick={() => changeColorOption('rgb')}
          >
            Show RGB value
          </button>
        </div>
        <div
          className='flex flex-col space-y-3 font-bold text-3xl text-black text-center'
          style={{
            textShadow:
              '-0.5px -0.5px 0 white, 0.5px -0.5px 0 white, -0.5px 0.5px 0 white, 0.5px 0.5px 0 white',
          }}
        >
          <p>Current Color:</p>
          <p>{bgColorValue}</p>
        </div>
      </div>
    </>
  );
}
export default RandomColorGenerator;
