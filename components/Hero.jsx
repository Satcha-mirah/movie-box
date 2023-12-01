import React from "react";

const styles = {
    backgroundImage: `url("/images/john-wick.png")`,
};

export default function Hero(props) {
    return (
        <div
            style={styles}
            className="flex flex-col w-[100%] items-start justify-around -720:justify-start min-h-[80vh] relative px-8 -400:px-4 bg-center bg-no-repeat bg-cover text-white"
        >
            {props.children}

            {/* container for typography */}
            <div className="flex flex-col gap-4 -720:mt-[80px]">
                {/* heading */}
                <h1 className="text-5xl leading-[130%]">
                    John Wick 3 : Parabellum
                </h1>

                {/* container for rating */}
                <div className="flex w-[50%] -500:w-[90%] justify-between">
                    {/* imdb rating */}
                    <div className="flex gap-[4px] items-center">
                        <img
                            src="/images/imdb.svg"
                            className="h-[100%]"
                            alt=""
                        />
                        <p className="text-sm">86.0/100</p>
                    </div>

                    {/* rotten tomato rating */}
                    <div className="flex gap-[4px] items-center">
                        <img
                            src="/images/tomato.svg"
                            className="h-[100%]"
                            alt=""
                        />
                        <p className="text-sm">97%</p>
                    </div>
                </div>

                {/* para */}
                <p className="max-w-[400px]">
                    John Wick is on the run after killing a member of the
                    international assassins guild, and with a $14 million price
                    tag on his head, he is the target of hit men and women
                    everywhere.
                </p>

                {/* watch trailer btn */}
                <div className="cursor-pointer bg-mainRed max-w-[200px] flex justify-center items-center p-2 rounded gap-2">
                    <img src="/images/play-btn.png" alt="" />
                    <p className="uppercase font-[600]">Watch Trailer</p>
                </div>
            </div>
        </div>
    );
}
