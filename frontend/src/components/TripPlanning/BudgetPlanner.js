import React, { useState } from 'react';

const BudgetPlanner = () => {
    const [budget, setBudget] = useState({ total: '', expenses: '' });

    const handleChange = (e) => {
        setBudget({ ...budget, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle budget planning logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="total" value={budget.total} onChange={handleChange} placeholder="Total Budget" />
            <input name="expenses" value={budget.expenses} onChange={handleChange} placeholder="Expenses" />
            <button type="submit">Plan Budget</button>
        </form>
    );
};

export default BudgetPlanner;
