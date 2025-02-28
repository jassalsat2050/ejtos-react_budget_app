import React, { useState,useContext,useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyChange = () => {
    const [currency, setCurrency] = useState('£');
    const { dispatch } = useContext(AppContext);

const handleChange = (event) => {
    setCurrency(event.target.value);
    changeCurrency();
  };

  const changeCurrency = () => {
    dispatch({
        type: 'CHG_CURRENCY',
        payload: currency,
    });
  }

useEffect(() => {
    console.log(currency);
    changeCurrency();
});

return (
    <div className='alert alert-primary' style={{paddingRight:'10px'}}>
        <label>
            Change Currency:
        </label>
        <select id="inputGroupSelect02" onChange={handleChange}>
            <option value="$" name="dollar">$ Dollar</option>
            <option selected value="£" name="pound">£ Pound</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="ruppee">₹ Ruppee</option>
        </select>
    </div>
)}

export default CurrencyChange;