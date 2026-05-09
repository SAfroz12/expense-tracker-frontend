function TransactionList({ transactions, setTransactions }) {

  function handleDelete(index) {
    const updated = transactions.filter((_, i) => i !== index);
    setTransactions(updated);
  }

  return (
    <div>
      <h3 className="font-semibold mb-2">Transactions</h3>

      {transactions.map((t, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-gray-50 p-2 mb-2 rounded"
        >
          <span>₹{t.amount}</span>
          <span>{t.category}</span>
          <span className={t.type === "income" ? "text-green-600" : "text-red-500"}>
            {t.type}
          </span>

          <button
            onClick={() => handleDelete(i)}
            className="text-sm bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default TransactionList; 