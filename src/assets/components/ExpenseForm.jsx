import React from 'react'

const ExpenseForm = () => {
  return (
   <form className="expense-form">
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title"  className='border pl-2 '/>
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
            <select className='border'>
                  <option value="">Select Category</option>
                  <option value="grocery">Grocery</option>
                  <option value="clothes">Clothes</option>
                  <option value="bills">Bills</option>
                  <option value="education">Education</option>
                  <option value="medicine">Medicine</option>
                </select>
          </div>
          <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input id="amount" className='border  pl-2' />
          </div>
          <button className="add-btn bg-blue-500">Add</button>
        </form>
  )
}

export default ExpenseForm