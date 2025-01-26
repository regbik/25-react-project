import { useState } from 'react';
import { useRef } from 'react';

function RandomColorGenerator() {
  const [bgColorValue, setBgColorValue] = useState('#dcc4d9');
  const colorOptRef = useRef('hex');

  function generateRandomColor() {
    let selectedColor;
    if (colorOptRef.current === 'rgb') {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      selectedColor = `rgb(${r}, ${g}, ${b})`;
    } else if (colorOptRef.current === 'hex') {
      let randHexColor = Math.floor(Math.random() * 16777215).toString(16);
      selectedColor = `#${randHexColor}`;
    }
    setBgColorValue(selectedColor);
  }

  function changeColorOption(clickedColorOption) {
    colorOptRef.current = clickedColorOption;
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
              colorOptRef.current === 'hex' ? 'bg-amber-300' : 'bg-amber-100'
            }`}
            onClick={() => changeColorOption('hex')}
          >
            Show HEX value
          </button>
          <button
            className={`hover:bg-amber-200 px-4 py-2 rounded-lg cursor-pointer outline ${
              colorOptRef.current === 'rgb' ? 'bg-amber-300' : 'bg-amber-100'
            }`}
            onClick={() => changeColorOption('rgb')}
          >
            Show RGB value
          </button>
        </div>
        <div
          className='gap-3 grid grid-cols-[160px_270px] font-bold text-3xl text-black text-left'
          style={{
            textShadow:
              '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white',
          }}
        >
          <p>{colorOptRef.current === 'hex' ? 'HEX Value:' : 'RGB Value:'}</p>
          <p>{bgColorValue}</p>
        </div>
      </div>
    </>
  );
}
export default RandomColorGenerator;
