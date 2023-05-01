import React from 'react';
import Nav from '../components/Nav';


const LoginScreen = () => (
    <>
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mt-10">Login</h1>
            <input
                name="username"
                className={inputStyle}
                placeholder="Username"
            />
        </div>
    </>
);

export default LoginScreen;

const stateToggleStyle = `font-medium text-green-600 hover:text-green-500'
`

const formContainerStyle = ''

const inputStyle = "rounded-md appearance-none relative block w-full px-3 my-5 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"

const buttonStyle = "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-10"