import Layout from "../components/layout/Layout";
import LoanForm from "../components/loans/LoanForm";
import LoanTable from "../components/loans/LoanTable";

function LoanPage() {
  return (
    <Layout>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          Loan Management
        </h1>
        <LoanForm />
        <LoanTable />
      </div>

    </Layout>
  );
}

export default LoanPage;