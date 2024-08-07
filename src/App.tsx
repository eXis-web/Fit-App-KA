import React, { useState, useEffect } from 'react';
import { Nav, ПроМене, Benefits, OurClasses, ContactUs } from '@/components';
import { SelectedLink } from '@/utils/types';

export const App = () => {
  const [selectedLink, setSelectedLink] = useState<SelectedLink>(SelectedLink.ПроМене);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY === 0 ? (setIsTopOfPage(true), setSelectedLink(SelectedLink.ПроМене)) : setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="app bg-gray-20">
      <Nav isTopOfPage={isTopOfPage} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
      <main>
        <ПроМене setSelectedLink={setSelectedLink} />
        <Benefits setSelectedLink={setSelectedLink} />
        <OurClasses setSelectedLink={setSelectedLink} />
        <ContactUs setSelectedLink={setSelectedLink} />
      </main>
    </div>
  );
};
