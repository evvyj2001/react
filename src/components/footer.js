import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const customStyle = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid #efefef",
    // color: state.data.color,
    color: state.isFocused ? state.isSelected ? '#333' : '#fff' : '#333',
    background: state.isFocused ? state.isSelected ? '#fff' : 'blue' : 'white',
    opacity: 0.8,
  }),
  control: (provided) => ({
    ...provided,
    width: 200,
    height: 40,
    background: "#fff",
    color: '#333',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.data.color,
  }),
}

function Footer() {
  const [selectedOption, setSelected] = useState('');

  const handleChange = (selectedOption) => {
      setSelected(selectedOption);
      console.log(`Option selected:`, selectedOption);
  };


  return (
    <footer className="footer">
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            styles={customStyle}
            className='select-box'
            placeholder='옵션 선택'
        />
      
    </footer>
  );
}

export default Footer;
