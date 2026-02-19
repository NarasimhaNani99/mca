import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log("page submitted", email, password)
    }
    return (
        <>
            <Header />

            <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4 pt-20">
                <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">

                    <h2 className="text-3xl font-bold text-center text-gray-800">
                        Login
                    </h2>
                    <p className="text-center text-gray-500 mt-2">
                        Welcome back! Please enter your details.
                    </p>

                    <form className="mt-6 space-y-5" onSubmit={handlesubmit} method="post">

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                required
                                onChange={(e) => { setPassword(e.target.value) }}
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Remember + Forgot */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-indigo-600" />
                                <span>Remember me</span>
                            </label>

                            <a href="#" className="text-indigo-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Register Link */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don’t have an account?{" "}

                        <Link to="/signup" className="text-indigo-600 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </main>

            <Footer />
        </>
    );
}
