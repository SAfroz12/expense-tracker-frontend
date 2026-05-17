import { useState } from "react";

import Layout from "../components/layout/Layout";

import ExpenseModal from "../components/expense/ExpenseModal";
import ExpenseTable from "../components/expense/ExpenseTable";

function ExpensePage() {

  const [showModal, setShowModal] = useState(false);
const [editingExpense, setEditingExpense] =
  useState(null);
  const [search, setSearch] = useState("");
console.log(search)
  return (
    <Layout>

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-4xl font-bold text-slate-700">
          Expenses
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-cyan-600 text-white px-6 py-3 rounded-xl"
        >
          + Create Expense
        </button>

      </div>

     

      <div className="mb-6">

        <input
          type="text"
          placeholder="Search expenses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white p-4 rounded-2xl shadow-md outline-none"
        />

      </div>

      {/* PASS SEARCH PROP */}

     <ExpenseTable
  search={search}
  onEdit={(expense) => {
    setEditingExpense(expense);
    setShowModal(true);
  }}
/>

      {showModal && (
        <ExpenseModal
  closeModal={() => {
    setShowModal(false);
    setEditingExpense(null);
  }}
  editingExpense={editingExpense}
/>
      )}

    </Layout>
  );
}

export default ExpensePage;