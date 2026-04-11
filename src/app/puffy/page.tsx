"use client"
import { useState } from "react";
import CategoryStrip from "../home-page/components/CategorySection";
import LoadMoreButton from "@/components/LoadMoreButton";
import { CATEGORIES } from './categories';

export default function Puffy() {
    const [visibleCount, setVisibleCount] = useState(4);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 4);
    };

    return (
        <div className="bg-[#f5f5f5] min-h-screen p-4 md:p-8">
            <CategoryStrip CATEGORIES={CATEGORIES.slice(0, visibleCount)} />
            <LoadMoreButton onClick={handleLoadMore} isVisible={visibleCount < CATEGORIES.length} />
        </div>
    );
}