"use client";

import { useEffect, useRef } from "react";

import { config } from "@/config";

const Loading = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const hideTimeout = setTimeout(() => {
            container.style.opacity = "0";

            const removeTimeout = setTimeout(() => {
                container.style.display = "none";
            }, 500);

            return () => clearTimeout(removeTimeout);
        }, 1000);

        return () => clearTimeout(hideTimeout);
    }, []);

    return (
        <div
            className="fixed flex justify-center items-center h-screen w-full bg-background z-50 transition-opacity duration-300"
            ref={containerRef}
        >
            <h3 className="uppercase text-xl font-semibold">{config.title}</h3>
        </div>
    );
};

export { Loading };
