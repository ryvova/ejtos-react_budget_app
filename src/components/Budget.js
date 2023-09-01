import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>
                Budget:  £<input type="number" min="0" max="2000" step="10" valuer={budget} />
            </span>
        </div>
    );
};
export default Budget;
