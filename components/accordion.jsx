import { useState } from "react";
import { books, data } from "../data/books";

export default function Accordian() {
  // making and accordian for
  // single selection
  const [selected, setSelected] = useState(null);

  // multiple selection
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultipleSelction(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  }
  return (
    <>
      <div className="accordian">
        <button
          onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
          className="btn"
        >
          Multi Selector
        </button>

        <div className="wrapper">
          <div className="accord">
            {data && data.length > 0 ? (
              data.map((dataItem) => (
                <div className="item">
                  <div
                    onClick={
                      enableMultipleSelection
                        ? () => handleMultipleSelction(dataItem.id)
                        : () => handleSingleSelection(dataItem.id)
                    }
                    className="title"
                  >
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {selected === dataItem.id ||
                  multiple.indexOf(dataItem.id) !== -1 ? (
                    <div className="content">{dataItem.answer}</div>
                  ) : null}
                </div>
              ))
            ) : (
              <div>no data found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
