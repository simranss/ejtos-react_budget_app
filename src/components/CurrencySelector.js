import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = (props) => {

    const { dispatch, currency } = useContext(AppContext);

    const changeCurrency = (value) => {
        if (value === 'Choose...') {
            value = '£'
        }
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    };

    return (
        <div className='alert alert-secondary input-group mb-3'>
            <div className="input-group-prepend">
                <label style={{ backgroundColor: '#a5e2a0' }} className="input-group-text" htmlFor="currency">Currency ({currency})</label>
            </div>
            <select className="custom-select" id="currency" onChange={(event) => changeCurrency(event.target.value.trim())}>
                <option defaultValue>Choose...</option>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="rupee">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencySelector;
