import { useSelector } from "react-redux";

import {PieChart,Pie,Cell,Tooltip,Legend,ResponsiveContainer,} from "recharts";

function ExpensePieChart() {
  const expenses = useSelector(
    (state) => state.expenses.expenses
  );
  const categoryData = expenses.reduce((acc, expense) => {
    const existing = acc.find(
      (item) => item.name === expense.category
    );

    if (existing) {
      existing.value += Number(expense.amount);
    } else {
      acc.push({
        name: expense.category,
        value: Number(expense.amount),
      });
    }
    return acc;
  }, []);
  const colors = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">

      <h2 className="text-xl font-semibold mb-6">
        Expense Distribution
      </h2>

      {categoryData.length === 0 ? (
        <p>No expense data available.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>

            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />

          </PieChart>
        </ResponsiveContainer>
      )}

    </div>
  );
}

export default ExpensePieChart;