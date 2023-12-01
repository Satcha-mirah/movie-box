import React, { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
    const [navShown, setNavShown] = useState(false);

    return (
        <>
            {/* container for hamburger */}
            <div
                onClick={() => {
                    setNavShown(!navShown);
                }}
                className={`dashboard-hamburger bg-mainRed w-[40px] h-[40px] p-2 rounded-[50%] hidden fixed z-[10] top-4 left-4 -950:flex flex-col justify-center items-center gap-[6px] ${
                    navShown ? "active" : ""
                }`}
            >
                <div className="bar-1 w-[90%] rounded-[3px] bg-white h-[3px]"></div>
                <div className="bar-2 w-[90%] rounded-[3px] bg-white h-[3px]"></div>
            </div>

            {/* container for dashboard */}
            <div
                className={`dashboard relative top-0 flex flex-col items-center py-4 gap-14 w-[50%] left-0 max-w-[250px] -950:absolute -950:shadow-xl -950:bg-white -950:z-[8] min-h-[100vh] -950:pt-[100px] -950:overflow-y-scroll -400:w-[80%] ${
                    navShown
                        ? "-950:opacity-1 -950:w-[50%]"
                        : "-950:opacity-0 -950:w-[0%]"
                }`}
            >
                {/* top part of dashboard */}
                <Link href="/">
                    <div className="flex items-center justify-start w-[90%] gap-4">
                        <img src="/images/tv.svg" alt="" />
                        <p className="font-bold text-xl">MovieBox</p>
                    </div>
                </Link>

                {/* lower part of dashboard */}
                <div className="dashboard-lower items-center flex flex-col gap-6 w-[100%]">
                    {/* redirects */}

                    <Link href="/">
                        <span className="flex flex-row items-center gap-4">
                            <img src="/images/home.svg" alt="" />

                            <p className="font-bold text-[#666]">Home</p>
                        </span>
                    </Link>
                    <span className="bg-softRed border-r-[4px] border-mainRed">
                        <img src="/images/movie-projector.svg" alt="" />
                        <p className="font-extrabold text-mainRed">Movies</p>
                    </span>
                    <span className="">
                        <img src="/images/tv-show.svg" alt="" />
                        <p className="font-bold text-[#666]">Tv Series</p>
                    </span>
                    <span className="">
                        <img src="/images/calendar.svg" alt="" />
                        <p className="font-bold text-[#666]">Upcoming</p>
                    </span>

                    {/* play game */}
                    <div className="border-[1px] w-[90%] max-w-[180px] rounded-xl p-4 border-mainRed flex flex-col gap-3">
                        <p className="font-[700] text-[#454545]">
                            Play movie quizzes and earn free tickets
                        </p>
                        <p className="text-[#666]">
                            50k people are playing now
                        </p>

                        <div className="text-mainRed bg-softRed w-[100%] max-w-[140px] rounded-[20px] text-center font-[600] p-2 cursor-pointer">
                            Start playing
                        </div>
                    </div>

                    {/* logout */}
                    <span>
                        <img src="/images/logout.svg" alt="" /> <p>Logout</p>
                    </span>
                </div>
            </div>
        </>
    );
}
