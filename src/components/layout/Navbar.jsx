function Navbar() {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl flex justify-between items-center">
      <h2 className="text-2xl font-bold text-slate-700">
        Expense Tracker Dashboard
      </h2>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
          A
        </div>

        <div>
          <p className="font-semibold">Admin</p>
          <p className="text-sm text-gray-500">Welcome Back 👋</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;