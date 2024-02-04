import {links, navbar} from "@/app/components/text";

const Footer = () => {
    return <footer className="bg-normalBG rounded-2xl shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <svg
                        className="h-14"
                        width="51.2"
                        height="64"
                        viewBox="0 0 400 500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M140 40C84.7715 40 40 84.7715 40 140L40 440C40 451.046 48.9543 460 60 460H80C91.0457 460 100 451.046 100 440V180C100 135.817 135.817 100 180 100H340C351.046 100 360 91.0457 360 80V60C360 48.9543 351.046 40 340 40H140ZM140 460C140 482.091 122.091 500 100 500H40C17.9086 500 0 482.091 0 460V140C0 62.6801 62.6801 0 140 0H360C382.092 0 400 17.9086 400 40V100C400 122.091 382.092 140 360 140H180C157.909 140 140 157.909 140 180V460ZM180 239.76C163.568 252.57 153 272.551 153 295C153 317.449 163.568 337.43 180 350.24C191.866 359.49 206.789 365 223 365C261.66 365 293 333.66 293 295C293 256.34 261.66 225 223 225C206.789 225 191.866 230.51 180 239.76ZM223 325C239.569 325 253 311.569 253 295C253 278.431 239.569 265 223 265C206.431 265 193 278.431 193 295C193 311.569 206.431 325 223 325Z"
                            fill="white"
                        />
                    </svg>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fdot</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    {navbar.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={`#${links[index]}`} className="hover:underline me-4 md:me-6">{item}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Fdot. All Rights Reserved.</span>
        </div>
    </footer>
}

export default Footer