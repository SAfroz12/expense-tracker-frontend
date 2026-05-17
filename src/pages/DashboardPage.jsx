import Layout from "../components/layout/Layout";

import DashboardCards from "../components/dashboard/DashboardCards";

import RecentExpenses from "../components/dashboard/RecentExpenses";

function DashboardPage() {

  return (
    <Layout>

      <div className="space-y-6">

        <DashboardCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <RecentExpenses />

          <div className="bg-white p-6 rounded-3xl shadow-md">

            <h2 className="text-2xl font-bold mb-4 text-slate-700">
              Analytics
            </h2>

            <p className="text-gray-500">
              Charts coming next...
            </p>

          </div>

        </div>

      </div>

    </Layout>
  );
}

export default DashboardPage;