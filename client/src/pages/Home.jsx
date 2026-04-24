import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  
  const {token, setToken, userName} = useContext(AppContext)

  const hadleLogout = () =>{
    localStorage.removeItem('token')
    toast.error('Logout successfully')
    setToken(null)
  }


  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Welcome! {userName}</h1>
        <button onClick={hadleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="p-6">

        {/* Welcome Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome Back 👋
          </h2>
          <p className="text-gray-600 mt-2">
            You have successfully logged in. This is your home page.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-700">
              Profile
            </h3>
            <p className="text-gray-500 mt-2">
              View and update your profile details.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-700">
              Settings
            </h3>
            <p className="text-gray-500 mt-2">
              Manage your account settings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-700">
              Activity
            </h3>
            <p className="text-gray-500 mt-2">
              Check your recent activity.
            </p>
          </div>

        </div>
      </div>
<ToastContainer/>
    </div>
  );
};

export default Home;
