import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header({ Username, College }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Change to false to test
    const [username, setUsername] = useState("JohnDoe");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const dropdownRef = useRef();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setDropdownOpen(false);
        console.log("Logged out");
    };

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-indigo-600">
                        MyLogo
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="hover:text-indigo-600">Home</Link>
                        <Link to="/about" className="hover:text-indigo-600">About</Link>
                        <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
                        <Link to="/items" className="hover:text-indigo-600">Products</Link>

                        {/* Auth Section */}
                        {!isLoggedIn ? (
                            <Link
                                to="/login"
                                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                            >
                                Login
                            </Link>
                        ) : (
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="font-medium text-gray-700 hover:text-indigo-600"
                                >
                                    {username}
                                </button>

                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg py-2">
                                        <Link
                                            to="/profile"
                                            className="block px-4 py-2 hover:bg-gray-100"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            Profile
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-2xl"
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-3">
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

                    {!isLoggedIn ? (
                        <Link
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            className="block bg-indigo-600 text-white px-4 py-2 rounded-lg"
                        >
                            Login
                        </Link>
                    ) : (
                        <>
                            <Link
                                to="/profile"
                                onClick={() => setIsOpen(false)}
                                className="block"
                            >
                                Profile
                            </Link>
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setIsOpen(false);
                                }}
                                className="block text-left text-red-500"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            )}
        </header>
    );
}
