import { useState } from "react";
function BorrowForm({ setLoans }) {
  const [form, setForm] = useState({
    amount: "",
    lender: "",
    interest: "",
    duration: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const P = Number(form.amount);
    const R = Number(form.interest);
    const T = Number(form.duration);

    const interestAmount = (P * R * T) / 100;
    const total = P + interestAmount;

    const today = new Date();
    const dueDate = new Date();
    dueDate.setMonth(today.getMonth() + T);
    const newLoan = {
      ...form,
      total,
      status: "pending",
    };

    setLoans(prev => [...prev, newLoan]);
    setForm({ amount: "", lender: "", interest: "", duration: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-4">
      <input className="w-full border p-2 rounded" name="amount" placeholder="Amount" onChange={handleChange} />
      <input className="w-full border p-2 rounded" name="lender" placeholder="Lender" onChange={handleChange} />
      <input className="w-full border p-2 rounded" name="interest" placeholder="Interest %" onChange={handleChange} />
      <input className="w-full border p-2 rounded" name="duration" placeholder="Months" onChange={handleChange} />

      <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
        Add Loan
      </button>
    </form>
  );
}
export default BorrowForm;