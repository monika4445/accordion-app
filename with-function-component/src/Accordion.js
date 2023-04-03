import { useState } from 'react';

function Accordion(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  const { items } = props;

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index}>
          <div className="accordion-header" onClick={() => handleClick(index)}>
            {item.name}
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>Capital: {item.capital}</p>
              <p>ISO 2: {item.iso2}</p>
              <p>ISO 3: {item.iso3}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
