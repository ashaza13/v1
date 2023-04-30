import React from 'react';
import { Link } from 'react-router-dom';

const navigation = [
    { name: 'Home', href: '#', current: true, linkUrl: "/" },
    { name: 'Search', href: '#', current: false, linkUrl: "/search" },
    { name: 'About', href: '#', current: false, linkUrl: "/profile" },
  ]

const isActive = ({ isCurrent }) => (isCurrent ? { className: "active" } : null);

const NavLink = props => <Link getProps={isActive} {...props} />;

const Nav = () => (
    <nav className="bg-white border-gray-200 dark:bg-pureWhite">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center">
                <img src="https://ik.imagekit.io/qysd8alv5/icon.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676943689807" className="h-8 mr-3" alt="Symbiota Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-900">Symbiota</span>
            </Link>
            <div className="flex md:order-2">
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Get started</button>
                <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-4 md:mt-0">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.linkUrl} className="block py-2 pl-3 pr-4 text-gray-900 bg-blue-700 rounded md:bg-transparent md:text-gray-900 md:p-0 md:dark:text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
);

export default Nav;
