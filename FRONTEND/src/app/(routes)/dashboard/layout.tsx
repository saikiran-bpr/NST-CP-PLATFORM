import Navbar from "@/components/dashboard/navbar";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

export default function Layout({children} : {children : ReactNode}){
    return(
        <>
            <Navbar />
            <Separator />
            {children}
        </>
    )
}