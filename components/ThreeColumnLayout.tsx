import React from 'react';
import LeftNav from './LeftNav';

interface ThreeColumnLayoutProps {
  middle: React.ReactNode;
  right: React.ReactNode;
  scrollToAbout?: () => void;
  scrollToContact?: () => void;
}

const ThreeColumnLayout: React.FC<ThreeColumnLayoutProps> = ({
  middle,
  right,
  scrollToAbout,
  scrollToContact,
}) => {
  return (
    <div className="h-screen w-full flex overflow-hidden bg-white text-black">
      {/* Left: 1/5 - Navigation */}
      <aside className="w-[20%] min-w-[160px] shrink-0 h-full overflow-y-auto overflow-x-hidden">
        <LeftNav scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} />
      </aside>
      {/* Middle: 2/5 */}
      <main className="w-[40%] shrink-0 h-full overflow-y-auto overflow-x-hidden border-r border-black">
        {middle}
      </main>
      {/* Right: 2/5 */}
      <aside className="w-[40%] shrink-0 h-full overflow-y-auto overflow-x-hidden">
        {right}
      </aside>
    </div>
  );
};

export default ThreeColumnLayout;
