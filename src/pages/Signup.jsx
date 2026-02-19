import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("Signup Data:", formData);
        // Add registration API logic here
    };

    return (
        <>
            <Header />

            <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4 pt-20">
                <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">

                    <h2 className="text-3xl font-bold text-center text-gray-800">
                        Create Account
                    </h2>
                    <p className="text-center text-gray-500 mt-2">
                        Sign up to get started
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
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
                                minLength="6"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                placeholder="Create a password"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                required
                                minLength="6"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                placeholder="Confirm your password"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Login Link */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Already have an account?{" "}
                        <a href="#" className="text-indigo-600 hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </main>

            <Footer />
        </>
    );
}
