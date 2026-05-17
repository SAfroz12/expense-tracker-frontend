import { useSelector } from "react-redux";

function DashboardCards() {

  const expenses = useSelector(
    (state) => state.expenses.expenses
  );

  const totalExpenses = expenses.reduce(
    (acc, item) => acc + Number(item.amount),
    0
  );

  const highestExpense =
    expenses.length > 0
      ? Math.max(
          ...expenses.map((e) =>
            Number(e.amount)
          )
        )
      : 0;

  const totalCategories = new Set(
    expenses.map((e) => e.category)
  ).size;

  const cards = [
    {
      title: "Total Expenses",
      value: `₹ ${totalExpenses}`,
      color:
        "from-red-500 to-pink-600",
    },

    {
      title: "Highest Expense",
      value: `₹ ${highestExpense}`,
      color:
        "from-orange-500 to-yellow-500",
    },

    {
      title: "Categories",
      value: totalCategories,
      color:
        "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {cards.map((card, index) => (

        <div
          key={index}
          className={`bg-gradient-to-r ${card.color}
          p-6 rounded-3xl text-white shadow-lg
          hover:scale-105 transition-all duration-300`}
        >
          <h2 className="text-lg">
            {card.title}
          </h2>

          <p className="text-4xl font-bold mt-4">
            {card.value}
          </p>
        </div>

      ))}

    </div>
  );
}

export default DashboardCards;