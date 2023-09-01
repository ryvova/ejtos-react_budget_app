import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {currency} = useContext(AppContext);
    return (
        <div className='alert alert-currency'>
            <select id="currency" name="currency" class="currency" onfocus="this.size=6;"
  onblur="this.size=0;"
  onchange="this.size=1; this.blur()">
                <option value="dollar">$ Dollar</option>
                <option value="pound">£ Pound</option>
                <option value="euro">€ Euro</option>
                <option value="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;