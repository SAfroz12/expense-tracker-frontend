import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    navigate("/dashboard");
  }

  return (
    <div className="h-screen flex bg-slate-950 overflow-hidden">

      {/* LEFT SIDE */}

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex w-1/2 items-center justify-center p-10"
      >

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop"
            alt="finance"
            className="w-[580px] h-[580px] object-cover rounded-[40px] shadow-2xl"
          />

          <div className="absolute inset-0 bg-cyan-900/20 rounded-[40px]" />

        </div>

      </motion.div>

      {/* RIGHT SIDE */}

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-1 items-center justify-center p-8"
      >

        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[35px] shadow-2xl">

          <h1 className="text-5xl font-bold text-white mb-3">
            Welcome Back
          </h1>

          <p className="text-gray-300 mb-8">
            Manage your finances smarter with ExpenseAI.
          </p>

          <div className="flex bg-white/10 rounded-2xl p-1 mb-6">

            <button
              onClick={() => setIsSignup(false)}
              className={`flex-1 py-3 rounded-xl transition-all duration-300 ${!isSignup
                  ? "bg-cyan-500 text-white"
                  : "text-gray-300"
                }`}
            >
              Login
            </button>

            <button
              onClick={() => setIsSignup(true)}
              className={`flex-1 py-3 rounded-xl transition-all duration-300 ${isSignup
                  ? "bg-cyan-500 text-white"
                  : "text-gray-300"
                }`}
            >
              Signup
            </button>

          </div>
          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >
            {isSignup && (
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white outline-none"
              />
            )}

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white outline-none"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white outline-none"
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white py-4 rounded-2xl text-lg font-semibold"
            >
              {isSignup ? "Create Account" : "Login"}
            </button>
            <p className="text-center text-gray-400 mt-5">
              {isSignup
                ? "Already have an account?"
                : "Don't have an account?"}

              <span
                onClick={() => setIsSignup(!isSignup)}
                className="text-cyan-400 ml-2 cursor-pointer hover:underline"
              >
                {isSignup ? "Login" : "Signup"}
              </span>
            </p>
          </form>

        </div>

      </motion.div>

    </div>
  );
}

export default LoginPage;