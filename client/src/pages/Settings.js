import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Settings() {
    return (
        <>
        <Header />
        <section className="settings-page">
            <div className="title">Settings</div>
            <div className="options">
                <div className="theme">Theme</div>
            </div>
        </section>
        <Footer />
        </>
    )
};

export default Settings;