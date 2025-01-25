import data from './data';
import { useState } from 'react';

function Accordion() {
  const [singleSelected, setSingleSelected] = useState(null);
  const [multiSelected, setMultiSelected] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  function handleSingleSelect(dataItemId) {
    setSingleSelected(singleSelected == dataItemId ? null : dataItemId);
  }

  function handleMultiSelect(dataItemId) {
    let selected = [...multiSelected];
    let idx = selected.indexOf(dataItemId);
    idx === -1 ? selected.push(dataItemId) : selected.splice(idx, 1);
    setMultiSelected(selected);
  }

  function toggleMultSelection() {
    setSingleSelected(null);
    setMultiSelected([singleSelected ? singleSelected : null]);
    setEnableMultiSelection(!enableMultiSelection);
  }
  return (
    <>
      <div className='grid h-screen place-items-center bg-blue-200'>
        <div className='mx-auto flex flex-col space-y-4 p-4'>
          <button
            onClick={toggleMultSelection}
            className='w-[240px] self-center py-2 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
          >
            {!enableMultiSelection ? 'Enable' : 'Disable'} Multi Selection
          </button>

          <div className='flex flex-col space-y-5 w-[480px] text-fuchsia-900'>
            {data && data.length > 0 ? (
              data.map((dataItem) => (
                <div key={dataItem.id}>
                  <div
                    className='flex flex-row justify-between text-lg bg-green-400 px-5 py-3'
                    onClick={
                      enableMultiSelection
                        ? () => handleMultiSelect(dataItem.id)
                        : () => handleSingleSelect(dataItem.id)
                    }
                  >
                    <h3>{dataItem.question}</h3>
                    <p className='text-xl'>+</p>
                  </div>
                  {singleSelected == dataItem.id ||
                  multiSelected.indexOf(dataItem.id) !== -1 ? (
                    <p className='text-sm px-5 pb-3 bg-green-400'>
                      {dataItem.answer}
                    </p>
                  ) : null}
                </div>
              ))
            ) : (
              <div>No data available</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Accordion;
