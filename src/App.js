import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import CurrencySelector from './components/CurrencySelector';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                        {
                        /* Add Budget component here under */
                        // Budget component
                        <div className='col-sm'>
                            <Budget />
                        </div>
                    }

                        {
                        /* Add Remaining component here under */
                        //Remaining component
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                    }

                        {
                        /* Add ExpenseTotal component here under */
                        //ExpenseTotal component
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                    }

                        {
                        /* Add Budget component here under */
                        // Budget component
                        <div className='col-sm'>
                            <CurrencySelector />
                        </div>
                    }

                    <h3 className='mt-3'>Allocation</h3>

                        {
                        /* Add ExpenseList component here under */
                        // ExpenseList component
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>
                    }

                    <h3 className='mt-3'>Change allocation</h3>

                        {
                        /* Add ExpenseItem component here under */
                        // ExpenseItem component
                        //<div className='col-sm'>
                          //  <ExpenseItem />
                        //</div>
                    }

                        {
                        /* Add AllocationForm component here under */
                        // AllocationForm component
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>
                    }

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
