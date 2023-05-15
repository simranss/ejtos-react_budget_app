import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const setBudget = (value) => {
        const intValue = parseInt(value);
        if (intValue > 20000) {
            alert('The value cannot exceed £20000')
            dispatch({
                type: 'SET_BUDGET',
                payload: 20000,
            });
        } else if (intValue < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending')
            dispatch({
                type: 'SET_BUDGET',
                payload: totalExpenses,
            });
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: intValue,
            });
        }
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required
                type='number'
                id='budget'
                step='10'
                value={budget}
                style={{ size: 10}}
                onChange={(event) => setBudget(event.target.value)}></input>
        </div>
    );
};
export default Budget;
