import { useSelector } from "react-redux";

function DashboardCards() {
  const expenses = useSelector(
    (state) => state.expenses.expenses
  );

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  const totalTransactions = expenses.length;
  const categories = new Set(
    expenses.map((expense) => expense.category)
  );
  const cards = [
    {
      title: "Total Expenses",
      value: `₹${totalExpense}`,
      color: "bg-red-500",
    },
    {
      title: "Transactions",
      value: totalTransactions,
      color: "bg-blue-500",
    },
    {
      title: "Categories",
      value: categories.size,
      color: "bg-green-500",
    },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.color} text-white p-6 rounded-3xl shadow-lg`}
        >
          <h2 className="text-lg">{card.title}</h2>

          <p className="text-3xl font-bold mt-4">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;