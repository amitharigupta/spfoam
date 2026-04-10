import CategoryStrip from "../home-page/components/CategorySection";

const CATEGORIES: any = [
  { label: 'Arm Chair 1', video: '/videos/arm-chair/arm-chair1.mp4', href: '/arm-chair-1' },
  { label: 'Arm Chair 2', video: '/videos/arm-chair/arm-chair2.mp4', href: '/arm-chair-2' },
  { label: 'Arm Chair 3', video: '/videos/arm-chair/arm-chair3.mp4', href: '/arm-chair-3' },
  { label: 'Arm Chair 4', video: '/videos/arm-chair/arm-chair4.mp4', href: '/arm-chair-4' },
  { label: 'Arm Chair 5', video: '/videos/arm-chair/arm-chair5.mp4', href: '/arm-chair-5' },
  { label: 'Arm Chair 6', video: '/videos/arm-chair/arm-chair6.mp4', href: '/arm-chair-6' },
  { label: 'Arm Chair 7', video: '/videos/arm-chair/arm-chair7.mp4', href: '/arm-chair-7' },
];

export default function SofasPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen p-4 md:p-8">
         <CategoryStrip CATEGORIES={CATEGORIES} />
    </div>
  );
}