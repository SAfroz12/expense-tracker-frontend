import { useSelector } from "react-redux";

function RecentExpenses() {

  const expenses = useSelector(
    (state) => state.expenses.expenses
  );

  const recentExpenses =
    [...expenses].reverse().slice(0, 5);

  return (
    <div className="bg-white p-6 rounded-3xl shadow-md">

      <h2 className="text-2xl font-bold mb-6 text-slate-700">
        Recent Expenses
      </h2>

      <div className="space-y-4">

        {recentExpenses.length > 0 ? (

          recentExpenses.map((expense) => (

            <div
              key={expense.id}
              className="flex justify-between items-center
              border-b pb-3"
            >

              <div>
                <p className="font-semibold">
                  {expense.title}
                </p>

                <p className="text-sm text-gray-500">
                  {expense.category}
                </p>
              </div>

              <p className="font-bold text-red-500">
                ₹ {expense.amount}
              </p>

            </div>
          ))

        ) : (

          <p className="text-gray-500">
            No recent expenses.
          </p>

        )}

      </div>
    </div>
  );
}

export default RecentExpenses;