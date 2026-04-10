import CategoryStrip from "../home-page/components/CategorySection";

const CATEGORIES: any = [
  { label: 'Arm Chair 1', video: '/videos/arm-chair/arm-chair1.mp4', href: '/arm-chair-1' },
  { label: 'Arm Chair 2', video: '/videos/arm-chair/arm-chair2.mp4', href: '/arm-chair-2' },
  { label: 'Arm Chair 3', video: '/videos/arm-chair/arm-chair3.mp4', href: '/arm-chair-3' },
  { label: 'Arm Chair 4', video: '/videos/arm-chair/arm-chair4.mp4', href: '/arm-chair-4' },
  { label: 'Arm Chair 5', video: '/videos/arm-chair/arm-chair5.mp4', href: '/arm-chair-5' },
  { label: 'Arm Chair 6', video: '/videos/arm-chair/arm-chair6.mp4', href: '/arm-chair-6' },
  { label: 'Arm Chair 7', video: '/videos/arm-chair/arm-chair7.mp4', href: '/arm-chair-7' },
  { label: 'Arm Chair 8', video: '/videos/arm-chair/arm-chair8.mp4', href: '/arm-chair-8' },
  { label: 'Arm Chair 9', video: '/videos/arm-chair/arm-chair9.mp4', href: '/arm-chair-9' },
  { label: 'Arm Chair 10', video: '/videos/arm-chair/arm-chair10.mp4', href: '/arm-chair-10' },
  { label: 'Arm Chair 11', video: '/videos/arm-chair/arm-chair11.mp4', href: '/arm-chair-11' },
  { label: 'Arm Chair 12', video: '/videos/arm-chair/arm-chair12.mp4', href: '/arm-chair-12' },
  { label: 'Arm Chair 13', video: '/videos/arm-chair/arm-chair13.mp4', href: '/arm-chair-13' },
  { label: 'Arm Chair 14', video: '/videos/arm-chair/arm-chair14.mp4', href: '/arm-chair-14' },
  { label: 'Arm Chair 15', video: '/videos/arm-chair/arm-chair15.mp4', href: '/arm-chair-15' },
  { label: 'Arm Chair 16', video: '/videos/arm-chair/arm-chair16.mp4', href: '/arm-chair-16' },
  { label: 'Arm Chair 17', video: '/videos/arm-chair/arm-chair17.mp4', href: '/arm-chair-17' },
  { label: 'Arm Chair 18', video: '/videos/arm-chair/arm-chair18.mp4', href: '/arm-chair-18' },
  { label: 'Arm Chair 19', video: '/videos/arm-chair/arm-chair19.mp4', href: '/arm-chair-19' },
  { label: 'Arm Chair 20', video: '/videos/arm-chair/arm-chair20.mp4', href: '/arm-chair-20' },
  { label: 'Arm Chair 21', video: '/videos/arm-chair/arm-chair21.mp4', href: '/arm-chair-21' },
  { label: 'Arm Chair 22', video: '/videos/arm-chair/arm-chair22.mp4', href: '/arm-chair-22' },
];

export default function SofasPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen p-4 md:p-8">
         <CategoryStrip CATEGORIES={CATEGORIES} />
    </div>
  );
}