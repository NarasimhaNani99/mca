export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white">MyLogo</h2>
                    <p className="mt-4 text-sm text-gray-400">
                        Building modern web experiences with React and Tailwind CSS.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">Home</a></li>
                        <li><a href="#" className="hover:text-white transition">About</a></li>
                        <li><a href="#" className="hover:text-white transition">Services</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                        <li><a href="#" className="hover:text-white transition">Support</a></li>
                        <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Subscribe</h3>
                    <p className="text-sm text-gray-400 mb-4">
                        Get the latest updates directly to your inbox.
                    </p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 text-sm rounded-l-md focus:outline-none text-gray-900"
                        />
                        <button
                            type="submit"
                            className="bg-indigo-600 px-4 py-2 text-sm text-white rounded-r-md hover:bg-indigo-700 transition"
                        >
                            Join
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} MyLogo. All rights reserved.</p>
                    <div className="flex space-x-4 mt-2 md:mt-0">
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
