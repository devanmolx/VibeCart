"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
    {
        id: "679fa6926369f8b4e85f3340",
        title: "Spring Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
        url: "/category/spring",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
    {
        id: "679fa6926369f8b4e85f333f",
        title: "Winter Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
        url: "/category/winter",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: "679fa6926369f8b4e85f333e",
        title: "Summer Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.unsplash.com/photo-1567784177951-6fa58317e16b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/category/summer",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <div
                className="w-max h-full flex transition-all ease-in-out duration-1000"
                style={{ transform: `translateX(-${current * 100}vw)` }}
            >
                {slides.map((slide) => (
                    <div
                        className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
                        key={slide.id}
                    >
                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                                {slide.description}
                            </h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                                {slide.title}
                            </h1>
                            <Link href={`/category/${slide.id}`}>
                                <button className="rounded-md bg-black text-white py-3 px-4 ">
                                    SHOP NOW
                                </button>
                            </Link>
                        </div>
                        <div className="h-1/2 xl:w-1/2 xl:h-full">
                            <Image
                                src={slide.img}
                                alt=""
                                height={1000}
                                width={1000}
                                className=" h-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
                {slides.map((slide, index) => (
                    <div
                        className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""
                            }`}
                        key={slide.id}
                        onClick={() => setCurrent(index)}
                    >
                        {current === index && (
                            <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;