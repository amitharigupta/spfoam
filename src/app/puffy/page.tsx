"use client"
import { useState } from "react";
import CategoryStrip from "../home-page/components/CategorySection";
import LoadMoreButton from "@/components/LoadMoreButton";

const CATEGORIES: any = [
    { label: 'Puffy 1', video: '/videos/puffy/1.mp4', href: '/puffy-1' },
    { label: 'Puffy 2', video: '/videos/puffy/2.mp4', href: '/puffy-2' },
    { label: 'Puffy 3', video: '/videos/puffy/3.mp4', href: '/puffy-3' },
    { label: 'Puffy 4', video: '/videos/puffy/4.mp4', href: '/puffy-4' },
    { label: 'Puffy 5', video: '/videos/puffy/5.mp4', href: '/puffy-5' },
    { label: 'Puffy 6', video: '/videos/puffy/6.mp4', href: '/puffy-6' },
    { label: 'Puffy 7', video: '/videos/puffy/7.mp4', href: '/puffy-7' },
    { label: 'Puffy 8', video: '/videos/puffy/8.mp4', href: '/puffy-8' },
    { label: 'Puffy 9', video: '/videos/puffy/9.mp4', href: '/puffy-9' },
];

export default function Puffy() {
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