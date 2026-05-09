import { useState } from "react";
function AddTransaction({ setTransactions }) {
  const [form, setForm] = useState({
    amount: "",
    type: "expense",
    category: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTransactions(prev => [...prev, form]);
    setForm({ amount: "", type: "expense", category: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-4">
      <input
        className="w-full border p-2 rounded"
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
      />

      <select
        className="w-full border p-2 rounded"
        name="type"
        onChange={handleChange}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <input
        className="w-full border p-2 rounded"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />

      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Add Transaction
      </button>
    </form>
  );
}
export default AddTransaction;