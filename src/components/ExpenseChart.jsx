import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function ExpenseChart({ transactions }) {
  const expenseData = transactions.filter(t => t.type === "expense");

  const dataMap = {};

  expenseData.forEach(t => {
    if (dataMap[t.category]) {
      dataMap[t.category] += Number(t.amount);
    } else {
      dataMap[t.category] = Number(t.amount);
    }
  });

  const data = Object.keys(dataMap).map(key => ({
    name: key,
    value: dataMap[key],
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  if (data.length === 0) {
  return (
    <div className="mt-6 text-gray-500">
      No expense data to display
    </div>
  );
}

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Expense Breakdown</h3>

      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default ExpenseChart;