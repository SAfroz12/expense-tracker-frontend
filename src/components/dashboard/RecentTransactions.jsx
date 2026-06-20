import { useSelector } from "react-redux";

function RecentTransactions() {
  const expenses = useSelector(
    (state) => state.expenses.expenses
  );

  const recentExpenses = [...expenses]
    .reverse()
    .slice(0, 5);

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">

      <h2 className="text-xl font-semibold mb-4">
        Recent Transactions
      </h2>

      {recentExpenses.length === 0 ? (
        <p>No Transactions</p>
      ) : (
        <div className="space-y-4">
          {recentExpenses.map((expense) => (
            <div
              key={expense.id}
              className="flex justify-between border-b pb-3"
            >
              <div>
                <p>{expense.title}</p>

                <span className="text-gray-500 text-sm">
                  {expense.category}
                </span>
              </div>

              <p className="font-semibold">
                ₹{expense.amount}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentTransactions;