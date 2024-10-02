'use client';

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import Menuitem from "./MenuItem";

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div onClick={() => { }} className="hidden md:block  text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer ">
                    airbin  your home

                </div>
                <div onClick={toggleOpen} className="p-4 md:py-1 md:px-2 boder:[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer
         hover:shadow-md transition">
                    <AiOutlineMenu />
                    <div className=" hidden md:block ">
                        <Avatar />

                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute top-14 right-0 bg-white shadow-md rounded-xl
    w-[40vw] md:w-3/4 overflow-hidden py-2 z-10">
                    <div className="flex flex-col gap-3 p-4">
                        <Menuitem onClick={() => {

                        }}
                            label="Login" />
                        <Menuitem onClick={() => {

                        }}
                            label="Sign up" />
                    </div>

                </div>
            )}
        </div>
    )
}

export default UserMenu;