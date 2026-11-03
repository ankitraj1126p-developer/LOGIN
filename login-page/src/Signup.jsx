
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen bg-[#aaa39f] flex items-center justify-center p-5">

      {/* Signup Container */}
      <div className="bg-white w-full max-w-[700px] rounded-3xl shadow-xl p-8 md:p-12">

        {/* Registration Heading */}
        <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-400 pb-4 mb-10">
          Registration
        </h2>

        {/* Signup Form */}
        <form className="space-y-7">

          <input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full border border-gray-300 rounded-xl p-5 text-xl outline-none focus:border-sky-500"
          />

          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded-xl p-5 text-xl outline-none focus:border-sky-500"
          />

          <input
            type="password"
            placeholder="Create password"
            required
            className="w-full border border-gray-300 rounded-xl p-5 text-xl outline-none focus:border-sky-500"
          />

          <input
            type="password"
            placeholder="Confirm password"
            required
            className="w-full border border-gray-300 rounded-xl p-5 text-xl outline-none focus:border-sky-500"
          />

          {/* Terms and Conditions */}
          <div className="flex items-center gap-3 text-lg text-gray-700">
            <input
              type="checkbox"
              required
              className="w-5 h-5 accent-sky-700"
            />

            <label>
              I accept all terms & conditions
            </label>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-black text-white rounded-xl py-5 text-2xl font-semibold hover:bg-gray-800 transition"
          >
            Register Now
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-xl mt-10">
          Already have an account?

          <Link
            to="/"
            className="text-sky-600 ml-3 hover:underline"
          >
            Login now
          </Link>
        </p>

      </div>
    </div>
  );
}
