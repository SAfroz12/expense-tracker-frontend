function Dashboard({ transactions }) {
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      
      <div className="bg-green-100 p-4 rounded-xl shadow">
        <h3 className="text-sm text-gray-600">Income</h3>
        <p className="text-xl font-bold text-green-600">₹{income}</p>
      </div>

      <div className="bg-red-100 p-4 rounded-xl shadow">
        <h3 className="text-sm text-gray-600">Expense</h3>
        <p className="text-xl font-bold text-red-500">₹{expense}</p>
      </div>

      <div className="bg-blue-100 p-4 rounded-xl shadow">
        <h3 className="text-sm text-gray-600">Balance</h3>
        <p className="text-xl font-bold text-blue-600">₹{balance}</p>
      </div>

    </div>
  );
}

export default Dashboard;