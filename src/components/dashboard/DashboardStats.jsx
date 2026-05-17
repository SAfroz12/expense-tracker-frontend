import StatCard from "./StatCard";

function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        title="Total Income"
        amount="50,000"
        color="bg-gradient-to-r from-green-500 to-emerald-600"
      />

      <StatCard
        title="Total Expenses"
        amount="20,000"
        color="bg-gradient-to-r from-red-500 to-pink-600"
      />

      <StatCard
        title="Remaining Balance"
        amount="30,000"
        color="bg-gradient-to-r from-cyan-500 to-blue-600"
      />
    </div>
  );
}

export default DashboardStats;