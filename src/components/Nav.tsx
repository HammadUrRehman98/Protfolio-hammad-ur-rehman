'use client';

import { useState } from 'react';
import { navLinks, site } from '@/config/site';

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="masthead">
      <div className="wrap masthead-in">
        <a className="masthead-name" href="#top">
          {site.name}
        </a>

        <nav aria-label="Primary">
          <ul className="masthead-nav">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-drawer"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <i />
          <i />
          <i />
        </button>
      </div>

      <div id="nav-drawer" className={`nav-drawer${open ? ' open' : ''}`}>
        <nav aria-label="Primary, mobile">
          <ul className="wrap">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
