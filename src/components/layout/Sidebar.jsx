import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaMoneyBillWave,
  FaChartPie,
  FaHandHoldingUsd,
  FaUser,
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Expenses",
      path: "/expenses",
      icon: <FaMoneyBillWave />,
    },
    {
      name: "Loans",
      path: "/loans",
      icon: <FaHandHoldingUsd />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaChartPie />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-10 text-center text-cyan-400">
        ExpenseAI
      </h1>

      <div className="space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300
              ${
                location.pathname === item.path
                  ? "bg-cyan-500 text-white"
                  : "hover:bg-slate-800"
              }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;