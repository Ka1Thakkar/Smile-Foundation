import Image from "next/image";
import Logo from '@/public/Logo.svg'
import { MotionValue, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

interface NvabarProps {
    progress : MotionValue<number>
}

const Nav = ({progress} : NvabarProps) => {
    const opacity = useTransform(progress, [0,0.025], [0,1])
    return (
        <motion.nav id='nav' className={" fixed top-0 w-screen h-[10vh] z-[99999] py-1 flex justify-between items-center"}>
            <motion.div style={{opacity: opacity}} className="absolute w-full h-full bg-[#001612]"></motion.div>
            <Image src={Logo} alt="Logo" className=" lg:h-[50px] h-[40px] object-contain py-1 z-10 lg:pl-10" />
            {/* <div className="lg:flex gap-7 text-xl hidden text-white z-10 pr-10">
                <Link href={'#about'} scroll={true} role="button">About us</ Link>
                <div role="button">Founders</div>
                <div role="button">Mentors</div>
                <div role="button">Contribute</div>
                <div role="button">Contact</div>
            </div> */}
        </motion.nav>
    );
}
 
export default Nav;