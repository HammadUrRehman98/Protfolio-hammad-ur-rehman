import { footerLinks, site } from '@/config/site';

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        {/* bottom navigation: the masthead sections, plus the FAQ page */}
        <nav className="foot-nav" aria-label="Footer">
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="foot-in">
          <span>
            {site.name} · {site.role}
          </span>
          <span>
            {site.location.city}, {site.location.country}
          </span>
        </div>
      </div>
    </footer>
  );
}
