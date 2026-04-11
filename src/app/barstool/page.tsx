"use client"
import { useState } from "react";
import CategoryStrip from "../home-page/components/CategorySection";
import LoadMoreButton from "@/components/LoadMoreButton";

const CATEGORIES: any = [
    { label: 'Barstool 1', video: '/videos/barstool/1.mp4', href: '/barstool-1' },
    { label: 'Barstool 2', video: '/videos/barstool/2.mp4', href: '/barstool-2' },
    { label: 'Barstool 3', video: '/videos/barstool/3.mp4', href: '/barstool-3' },
    { label: 'Barstool 4', video: '/videos/barstool/4.mp4', href: '/barstool-4' },
    { label: 'Barstool 5', video: '/videos/barstool/5.mp4', href: '/barstool-5' },
    { label: 'Barstool 6', video: '/videos/barstool/6.mp4', href: '/barstool-6' },
    { label: 'Barstool 7', video: '/videos/barstool/7.mp4', href: '/barstool-7' },
    { label: 'Barstool 8', video: '/videos/barstool/8.mp4', href: '/barstool-8' },
    { label: 'Barstool 9', video: '/videos/barstool/9.mp4', href: '/barstool-9' },
];

export default function Barstool() {
    const [visibleCount, setVisibleCount] = useState(4);

    const handleLoadMore  = () => {
        setVisibleCount((prevCount) => prevCount + 4);
    };

    return (
        <div className="bg-[#f5f5f5] min-h-screen p-4 md:p-8">
            <CategoryStrip CATEGORIES={CATEGORIES.slice(0, visibleCount)} />
            <LoadMoreButton onClick={handleLoadMore} isVisible={visibleCount < CATEGORIES.length} />
        </div>
    );
}