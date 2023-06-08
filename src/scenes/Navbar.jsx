import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage })=> {
    const lowerCasePage = page.toLowerCase();
    console.log(page);
    return (
        <AnchorLink 
        className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
        hover:text-yellow transiton duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    ) 
}


const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navbarBackGround = isTopOfPage ? "" : "bg-red";


  return (
    <nav className={`${navbarBackGround}  z-40 w-full fixed top-0 py-6`}>
        <div className="flex items-center justify-between mx-auto w-5/6">
            <h4 className="font-playfair text-3xl font-bold">QUADRATOM</h4>
            
            {/* DESKTOP NAV */}
            {isAboveSmallScreens ? (
                <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                    <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Project"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Testimonials"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                </div>
            ) : (
           <button
            className=" text-2xl border-2 bg-red p-2 rounded-full hover:bg-white hover:text-red  transition duration-500 hover:border-red " 
             onClick={() =>  setMenuToggled(!isMenuToggled)}
           >
                MENU
           </button>
            )}
            {/* MOBILE MENU POPUP */}
            {!isAboveSmallScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setMenuToggled(!isMenuToggled)}>
                    <img src="../assets/close-icon.svg" alt="close-icon" />
                    </button>
                </div>
                {/* MENU-ITEMS */}
                 <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                 <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Project"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                 </div>
                </div>
            )}
        </div> 
    </nav>
  )
}

export default Navbar 
