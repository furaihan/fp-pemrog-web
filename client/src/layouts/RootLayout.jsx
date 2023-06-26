import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import React from "react";
import Footer from "../component/Footer/Footer";

export default function RootLayout(){
    const data = useLoaderData();
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet/>
            </main>
            <Footer />
        </React.Fragment>
    );
}