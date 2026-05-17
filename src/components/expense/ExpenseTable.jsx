import { useSelector, useDispatch } from "react-redux";

import { deleteExpense } from "../../features/expenses/expenseSlice";

function ExpenseTable({ search ,onEdit}) {

    const dispatch = useDispatch();

    const expenses = useSelector(
        (state) => state.expenses.expenses
    );
    const filteredExpenses = expenses.filter(
        (expense) =>
            expense.title
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            expense.category
                .toLowerCase()
                .includes(search.toLowerCase())
    );
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-2xl font-bold mb-6 text-slate-700">
                Expense List
            </h2>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead>
                        <tr className="border-b text-left">
                            <th className="p-3">Title</th>
                            <th className="p-3">Amount</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredExpenses.length > 0 ? (

                            filteredExpenses.map((expense) => (
                                <tr
                                    key={expense.id}
                                    className="border-b hover:bg-gray-50 transition-all duration-200"
                                >
                                    <td className="p-3">{expense.title}</td>

                                    <td className="p-3">
                                        ₹ {expense.amount}
                                    </td>

                                    <td className="p-3">

                                        <span
                                            className={`px-3 py-1 rounded-full text-sm text-white
                                          ${expense.category === "Food"
                                                    ? "bg-orange-500"
                                                    : expense.category === "Bills"
                                                        ? "bg-red-500"
                                                        : expense.category === "Travel"
                                                            ? "bg-blue-500"
                                                            : "bg-purple-500"
                                                }`}
                                        >
                                            {expense.category}
                                        </span>

                                    </td>

                                    <td className="p-3 flex gap-3">

                                        <button
                                            onClick={() => onEdit(expense)}
                                            className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-all duration-200"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() =>
                                                dispatch(deleteExpense(expense.id))
                                            }
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-200"
                                        >
                                            Delete
                                        </button>

                                    </td>
                                </tr>
                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="4"
                                    className="text-center p-10 text-gray-500"
                                >
                                    No expenses found.
                                </td>

                            </tr>
                        )}

                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default ExpenseTable;