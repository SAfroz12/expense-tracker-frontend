import Layout from "../components/layout/Layout";

import DashboardCards from "../components/dashboard/DashboardCards";
import FinancialHealthCard from "../components/dashboard/FinancialHealthCard";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import ExpensePieChart from "../components/charts/ExpensePieChart";
function DashboardPage() {
  return (
    <Layout>

      <div className="space-y-6">
        <DashboardCards />
       <div className="grid lg:grid-cols-2 gap-6">

        <FinancialHealthCard />
        <ExpensePieChart/>
        </div>
        <RecentTransactions />
      </div>
    </Layout>
  );
}

export default DashboardPage;