import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const changeValue = () => {
    if(budget > remaining) {
        alert("The value cannot exceed remaining funds  £" + remaining);
        setCost("");
        return;
    }

    if(budget < totalExpenses) {
        alert("You cannot reduce the budget value lower than the spending");
        setCost("");
        return;
    }
}

const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>
                Budget:  
                <label htmlFor="budget" className="currencySymbol">£</label>
                <input id="budget" type="number" min="0" max="20000" onChange={changeValue} />
            </span>
        </div>
    );
};
export default Budget;
