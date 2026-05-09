import { useState, useEffect } from "react";

import AddTransaction from "../components/AddTransaction";
import TransactionList from "../components/TransactionList";
import BorrowForm from "../components/BorrowForm";
import BorrowList from "../components/BorrowList";
import Dashboard from "../components/Dashboard";
import ExpenseChart from "../components/ExpenseChart";

function DashboardPage() {

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [loans, setLoans] = useState(() => {
    const saved = localStorage.getItem("loans");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("loans", JSON.stringify(loans));
  }, [loans]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold text-center mb-8 text-cyan-600">
        💰 Expense Tracker Dashboard
      </h1>

      <Dashboard transactions={transactions} />

      <div className="bg-white p-5 rounded-2xl shadow mb-6">
        <ExpenseChart transactions={transactions} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-3">
            Add Transaction
          </h2>

          <AddTransaction setTransactions={setTransactions} />

          <TransactionList
            transactions={transactions}
            setTransactions={setTransactions}
          />
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-3">
            Borrow Money
          </h2>

          <BorrowForm setLoans={setLoans} />

          <BorrowList
            loans={loans}
            setLoans={setLoans}
          />
        </div>

      </div>
    </div>
  );
}

export default DashboardPage;