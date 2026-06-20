import { useState } from "react";
import { useDispatch } from "react-redux";
import { addLoan } from "../../features/loans/loanSlice";

function LoanForm() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    lender: "",
    amount: "",
    interest: "",
    dueDate: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      addLoan({
        id: Date.now(),
        ...formData,
        status: "Pending",
      })
    );

    setFormData({
      lender: "",
      amount: "",
      interest: "",
      dueDate: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md space-y-4"
    >
      <input
        type="text"
        name="lender"
        placeholder="Lender Name"
        value={formData.lender}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="number"
        name="interest"
        placeholder="Interest %"
        value={formData.interest}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <button
        type="submit"
        className="w-full bg-cyan-500 text-white py-3 rounded-lg"
      >
        Add Loan
      </button>
    </form>
  );
}

export default LoanForm;