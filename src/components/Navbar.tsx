import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/digital-marketing', label: 'Digital Marketing' },
  { to: '/tech', label: 'Tech' },
  { to: '/production', label: 'Production' },
  { to: '/podcasts', label: 'Podcasts' }
];

function Logo() {
  return (
    <span className="flex items-end gap-0 font-display text-3xl leading-none tracking-normal sm:text-4xl" aria-label="CIEL">
      <span className="text-ciel-cyan">C</span>
      <span className="text-ciel-blue">I</span>
      <span className="text-ciel-violet">E</span>
      <span className="text-ciel-purple">L</span>
    </span>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b-[5px] border-ciel-cyan bg-ciel-primary">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link
          to="/"
          className="brutal-focus inline-flex items-center border-[4px] border-ciel-cyan bg-ciel-ink px-3 py-2 shadow-[5px_5px_0_var(--ciel-logo-purple)]"
        >
          <Logo />
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link-brutal ${isActive ? 'nav-link-brutal-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          className="nav-icon-brutal lg:hidden"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="fixed inset-0 top-[77px] z-40 border-t-[5px] border-ciel-ink bg-ciel-primary px-4 py-8 text-ciel-cream lg:hidden">
          <div className="grid gap-5">
            {navItems.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="border-[5px] border-ciel-cyan bg-ciel-cream px-5 py-6 font-display text-4xl uppercase leading-none text-ciel-ink shadow-[6px_6px_0_var(--ciel-logo-purple)]"
                style={{ transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})` }}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
