import React from "react";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center gap-8 mb-8">
            {/* container for icons */}
            <div>
                <img src="/images/socials.png" alt="" />
            </div>

            {/* container for redirects */}
            <div className="flex justify-center items-center gap-6 font-bold -720:flex-col">
                <p>Conditions of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
            </div>

            {/* container for rights */}
            <div className="text-[#6B7280] font-bold">
                © 2021 MovieBox by Adriana Eka Prayudha{" "}
            </div>
        </footer>
    );
}
