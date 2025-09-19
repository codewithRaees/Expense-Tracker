
import './App.css'
import ExpanseTable from './assets/components/ExpanseTable'
import ExpenseForm from './assets/components/ExpenseForm'

function App() {
  return (
    <>
    <main className='mt-10 '>
      <h1 className='text-3xl font-bold mb-10'>Track Your Expense</h1>
      <div className="expense-tracker">
          <ExpenseForm />
          <ExpanseTable/>
        
        
      </div>
    </main>
    </>
  )
}

export default App
