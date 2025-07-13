import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <Logo width="40px" />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
                            Share your stories, connect with readers, and build your audience. 
                            Join thousands of writers who trust BlogHub to share their ideas.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                            &copy; 2024 BlogHub. All rights reserved.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" to="/">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" to="/">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" to="/">
                                    Press
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-4">
                            Support
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" to="/">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" to="/">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" to="/">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer