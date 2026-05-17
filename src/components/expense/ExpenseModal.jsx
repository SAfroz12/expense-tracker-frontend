import { useState } from "react";
import { useDispatch } from "react-redux";

import { addExpense,editExpense } from "../../features/expenses/expenseSlice";

function ExpenseModal({ closeModal,  editingExpense }) {

  const dispatch = useDispatch();

const [formData, setFormData] = useState(
  editingExpense || {
    title: "",
    amount: "",
    category: "",
  }
);
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

function handleSubmit(e) {

  e.preventDefault();

  if (editingExpense) {

    dispatch(
      editExpense(formData)
    );

  } else {

    dispatch(
      addExpense({
        id: Date.now(),
        ...formData,
      })
    );
  }

  closeModal();
}
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-full max-w-lg p-8 rounded-3xl shadow-2xl animate-[fadeIn_0.3s_ease]">

        <h2 className="text-3xl font-bold mb-6 text-slate-700">
          Create Expense
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="Expense Title"
            className="w-full border p-4 rounded-xl outline-none"
            onChange={handleChange}
          />

          <input
            type="number"
            name="amount"
            value={formData.amount}
            placeholder="Amount"
            className="w-full border p-4 rounded-xl outline-none"
            onChange={handleChange}
          />

          <select
            name="category"
            value={formData.category}
            className="w-full border p-4 rounded-xl outline-none"
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Bills</option>
            <option>Shopping</option>
          </select>

          <div className="flex gap-4">

            <button
              type="submit"
              className="flex-1 bg-cyan-600 text-white py-3 rounded-xl hover:bg-cyan-700 transition-all"
            >
            {editingExpense ? "Update Expense" : "Add Expense"}
            </button>

            <button
              type="button"
              onClick={closeModal}
              className="flex-1 bg-gray-200 py-3 rounded-xl"
            >
              Cancel
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default ExpenseModal;