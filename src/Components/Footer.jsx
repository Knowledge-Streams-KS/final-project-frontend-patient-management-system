import React from 'react';

const Footer = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 w-full bg-zinc-900 text-white py-4 h-[150px] flex justify-center items-center">
      <div className="container mx-auto max-w-3xl flex flex-col items-center">
        <div className="text-xl font-medium mb-4">Patient Management System</div>
        <p className="text-sm">© 2024 All Rights Reserved.</p>
        <div className="flex items-center mt-4">
          <span className="text-sm hover:text-gray-200 mr-4">Terms & Conditions</span>
          <span className="text-sm hover:text-gray-200">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
