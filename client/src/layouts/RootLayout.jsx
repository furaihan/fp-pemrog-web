import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import React from "react";
import Footer from "../component/Footer/Footer";

export default function RootLayout(){
    const data = useLoaderData();
    console.log("RootLayout Loader Data:");
    console.log(data);
    return(
        <React.Fragment>
            <header>
                <Navbar isLoggedin={data.isUserLoggedIn} username={data.user.username}/>
            </header>
            <main>
                <Outlet/>
            </main>
            <Footer />
        </React.Fragment>
    );
}