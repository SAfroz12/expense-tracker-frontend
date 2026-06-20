import { useSelector, useDispatch } from "react-redux";
import {
  deleteLoan,
  markAsPaid,
} from "../../features/loans/loanSlice";

function LoanTable() {
  const dispatch = useDispatch();

  const loans = useSelector(
    (state) => state.loans.loans
  );

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">

      <h2 className="text-2xl font-bold mb-6">
        Loan List
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">Lender</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Interest</th>
            <th className="p-3 text-left">Due Date</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>

          {loans.map((loan) => (

            <tr
              key={loan.id}
              className="border-b"
            >
              <td className="p-3">{loan.lender}</td>

              <td className="p-3">
                ₹{loan.amount}
              </td>

              <td className="p-3">
                {loan.interest}%
              </td>

              <td className="p-3">
                {loan.dueDate}
              </td>

              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm
                  ${
                    loan.status === "Paid"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {loan.status}
                </span>
              </td>

              <td className="p-3 flex gap-2">

                <button
                  onClick={() =>
                    dispatch(markAsPaid(loan.id))
                  }
                  className="bg-green-500 text-white px-3 py-2 rounded"
                >
                  Paid
                </button>

                <button
                  onClick={() =>
                    dispatch(deleteLoan(loan.id))
                  }
                  className="bg-red-500 text-white px-3 py-2 rounded"
                >
                  Delete
                </button>

              </td>
            </tr>

          ))}

        </tbody>
      </table>
    </div>
  );
}

export default LoanTable;