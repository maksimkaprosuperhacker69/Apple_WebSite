import {appleImg, bagImg, searchImg} from "../utils/index.js";
import {navLists} from "../constans"
const Navbar = () => {
    return (
        <header className=" w-full py-[2.5vh] px-[1vw] flex justify-between items-center">
            <nav className="flex items-center justify-between w-full screen-max-width">
                <img src={appleImg} alt="logo" width="18" height="22" />
                <div className="flex flex-1 items-center justify-center max-sm:hidden">
                    {navLists.map((nav,i) => (
                        <div key={i} className="px-[7vw] text-sm cursor-pointer text-gray hover:text-white transition-all">
                            {nav}
                        </div>
                        ))}
                </div>

                <div className="flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt="search" width="18" height="18" className="cursor-pointer" />
                    <img src={bagImg} alt="bag" width="18" height="18" className="cursor-pointer"/>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;