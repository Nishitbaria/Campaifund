import React  from "react";

export default function Footer() {

return(

<footer className="  shadow bg-[#13131a] ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                <img src="/src/assets/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover-underline-animation">Campaifund</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover-underline-animation md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover-underline-animation md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover-underline-animation md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover-underline-animation">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover-underline-animation">Campaifund™</a>. All Rights Reserved.</span>
    </div>
</footer>



 ) 




 }