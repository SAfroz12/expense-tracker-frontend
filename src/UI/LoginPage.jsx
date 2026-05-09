import { useNavigate } from "react-router-dom";
import { useState } from "react";
import expenseImage from "../assets/logo.png";

function LoginPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
function handleLogin(e) {
  e.preventDefault();

  navigate("/dashboard");
}
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-24 items-center">

        {/* LEFT SIDE IMAGE */}
        <div className="relative flex items-center justify-center animate-[float_5s_ease-in-out_infinite] animate-[fadeInLeft_1.2s_ease]">

          {/* Glow Background */}
          <div className="absolute w-[90%] h-[90%] bg-cyan-200 blur-3xl opacity-30 rounded-full"></div>

          {/* Image Card */}
          <div className="relative bg-white/70 backdrop-blur-lg border border-white/40 rounded-[40px] shadow-2xl p-6 hover:scale-105 transition-all duration-500">
            <img
              src={expenseImage}
              alt="Expense Tracker"
              className="w-full max-w-2xl object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-[40px] shadow-2xl p-10 md:p-14 hover:shadow-cyan-200/50 transition-all duration-500 animate-[fadeInRight_1.2s_ease]">
          <div className="w-full max-w-lg">

            <h1 className="text-4xl font-bold text-center text-cyan-600 mb-2">
              Expense Tracker
            </h1>

            <p className="text-center text-gray-500 mb-8">
              Track your income, expenses and loans smarter with AI-powered insights.
            </p>

            <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`w-1/2 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  isLogin
                    ? "bg-cyan-600 text-white"
                    : "text-gray-600"
                }`}
              >
                Login
              </button>

              <button
                onClick={() => setIsLogin(false)}
                className={`w-1/2 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  !isLogin
                    ? "bg-cyan-600 text-white"
                    : "text-gray-600"
                }`}
              >
                Signup
              </button>
            </div>

         <form onSubmit={handleLogin} className="space-y-5">

              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 focus:scale-[1.02]"
                />
              )}

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 focus:scale-[1.02]"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 focus:scale-[1.02]"
              />

              {!isLogin && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 focus:scale-[1.02]"
                />
              )}

              <button
                className="w-full bg-cyan-600 hover:bg-cyan-700 hover:scale-[1.02] text-white py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-300"
              >
                {isLogin ? "Login" : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              {isLogin ? (
                <p>
                  Don&apos;t have an account?{" "}
                  <span
                    onClick={() => setIsLogin(false)}
                    className="text-cyan-600 cursor-pointer font-semibold"
                  >
                    Signup
                  </span>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <span
                    onClick={() => setIsLogin(true)}
                    className="text-cyan-600 cursor-pointer font-semibold"
                  >
                    Login
                  </span>
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
