
import { Link } from "react-router-dom"
export default function LoginForm() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-stone-400">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

     <div className="flex">
  
      <button className="w-1/2 bg-sky-900 text-white py-3 rounded-tl-lg">
       Login
       </button>

     <button className="w-1/2 bg-gray-100 text-gray-800 py-3 rounded-tr-lg">
      Signup
     </button>

       </div>

      &nbsp;
      &nbsp;
      
      <h1 className=" text-3xl font-bold ">Login Form</h1>

        <div className="mt-8">

        < input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded-lg p-3"/>

        </div>


        <div className="mt-8">
          <input type="password" placeholder="Password"className="w-full border border-gray-300 rounded-lg p-3"/>

        </div>

        <div className="text-right mt-3">
          <a href="/forgot password" className="text-cyan-500 hover:text-cyan-700 hover:underline">Forgot password?</a>
        </div>

        <button type="submit" className="w-full bg-black text-white py-3 rounded-lg mt-5 text-lg font-medium " >Login</button>

        <p className="text-center mt-6 text-lg">
          Not a member?

          <a href="/signup" className="text-cyan-700 ml-3 hover:underline">
          Signup now
          </a>
          
        </p>

        
     


        

      </div>

    </div>
  );
}