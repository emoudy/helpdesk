'use client';

import React, { useState } from 'react';

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button
      className="hamburger-button"
      onClick={toggleMenu}
      aria-label="Toggle Menu"
    >
      ☰ {/* This is a simple hamburger icon */}
    </button>
  );
}
