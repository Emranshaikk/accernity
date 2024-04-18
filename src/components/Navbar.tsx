'use client';
import React, {useState} from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import {cn} from "@/utils/cn";
import Link from "next/link";

function Navbar({className}: {className? : string}) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div 
    className={cn ("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50 flex justify-center items-center flex-row flex-shrink-0 grid-flow-row",)}>
        
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active}
            item="Home">
           {/* <div className="flex flex-col space-y-4 text-sm flex-shrink-0"> */}
            {/* <HoveredLink href="/web-dev">Web Development</HoveredLink> */}
            {/* <HoveredLink href="/interface-design">Interface Design</HoveredLink> */}
            {/* <HoveredLink href="/seo">SEO</HoveredLink> */}
            {/* <HoveredLink href="/branding">Branding</HoveredLink> */}
          {/* </div> */}
            </MenuItem>

            {/* <MenuItem  */}
            {/* setActive={setActive} active={active}item="Pricing"> */}
                {/* <div className = "flex-col space-y-4 text-sm flex shrink-zero"> */}
                    {/* <HoveredLink href="/Courses"> Basic</HoveredLink> */}
                    {/* <HoveredLink href="/Courses"> Advance</HoveredLink> */}
                    {/* <HoveredLink href="/Courses"> Excel</HoveredLink> */}
                {/* </div> */}
            {/* </MenuItem> */}
            
            <Link href={"/Musiccourses"}>
                <MenuItem setActive={setActive} active={active}
                    item="Courses">
                </MenuItem>
            </Link>

            <Link href={"/ConnectWithUs"}>
                <MenuItem setActive={setActive} active={active}
                    item="Contact Us">
                </MenuItem>
            </Link>



            </Link>
        </Menu>
    
    </div>
  )
}

export default Navbar