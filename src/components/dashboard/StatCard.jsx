function StatCard({ title, amount, color }) {
  return (
    <div
      className={`p-6 rounded-2xl shadow-md text-white ${color}
      hover:scale-105 transition-all duration-300`}
    >
      <h2 className="text-lg font-medium">{title}</h2>

      <p className="text-3xl font-bold mt-3">₹ {amount}</p>
    </div>
  );
}

export default StatCard;