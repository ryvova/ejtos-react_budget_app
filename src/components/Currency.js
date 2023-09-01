import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const changeValue = (value) => {
  for (let i = 0; i < document.getElementsByClassName("currencySymbol").length; i++) {
    document.getElementsByClassName("currencySymbol")[i].innerText = value;
  }
}

const Currency = () => {
    const {currency} = useContext(AppContext);
    return (
        <div className='alert alert-currency'>
            <select id="currency" name="currency" className="currency" defaultValue="£"
                onChange={(event) => changeValue(event.target.value)} >
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;
