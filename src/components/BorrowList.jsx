function BorrowList({ loans, setLoans }) {

  const pending = loans.filter(l => l.status === "pending").length;
  const paid = loans.filter(l => l.status === "paid").length;
  function markAsPaid(index) {
    const updated = loans.map((loan, i) =>
      i === index ? { ...loan, status: "paid" } : loan
    );
    setLoans(updated);
  }

  return (
    <div>
      <div className="mb-3 text-sm">
        Pending: <span className="text-red-500">{pending}</span> |{" "}
        Paid: <span className="text-green-600">{paid}</span>
      </div>
      <h3 className="font-semibold mb-2">Loans</h3>

      {loans.map((loan, i) => (
        <div
          key={i}
          className="bg-gray-50 p-3 mb-2 rounded shadow-sm"
        >
          <p>💰 ₹{loan.amount} from {loan.lender}</p>
          <p>📈 Interest: {loan.interest}%</p>
          <p>📅 Duration: {loan.duration} months</p>
          <p>⏰ Due Date: {loan.dueDate}</p>

          <p className="font-semibold text-purple-600">
            Total: ₹{loan.total}
          </p>

          <p>
            Status:{" "}
            <span className={loan.status === "paid" ? "text-green-600" : "text-red-500"}>
              {loan.status}
            </span>
          </p>

          {loan.status === "pending" && (
            <button
              onClick={() => markAsPaid(i)}
              className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
            >
              Mark as Paid
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default BorrowList;
