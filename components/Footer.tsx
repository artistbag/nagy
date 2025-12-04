import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-6 bg-stone-100 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-stone-500 text-xs tracking-wider">
        <p>&copy; {new Date().getFullYear()} NAGY. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-stone-800 transition-colors">Instagram</a>
          <a href="#" className="hover:text-stone-800 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;