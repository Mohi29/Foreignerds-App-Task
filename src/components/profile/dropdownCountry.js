import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from 'react';
import globalConstants from '../../globalConstants.js';

export function CountryDropdown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(globalConstants.allCountryData);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    //   multiple={true}
    //   min={0}
    //   max={3}
    />
  );
}