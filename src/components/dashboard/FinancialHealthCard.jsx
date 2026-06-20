import { useSelector } from "react-redux";

function FinancialHealthCard() {
  const expenses = useSelector(
    (state) => state.expenses.expenses
  );

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  let score = 100;

  if (totalExpense > 50000) score -= 40;
  else if (totalExpense > 25000) score -= 20;

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">

      <h2 className="text-xl font-semibold">
        Financial Health Score
      </h2>

      <div className="mt-4 flex items-center justify-between">

        <p className="text-5xl font-bold">
          {score}/100
        </p>

        <span
          className={`px-4 py-2 rounded-full ${
            score >= 80
              ? "bg-green-100 text-green-700"
              : score >= 60
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {score >= 80
            ? "Excellent"
            : score >= 60
            ? "Average"
            : "Poor"}
        </span>

      </div>

    </div>
  );
}

export default FinancialHealthCard;