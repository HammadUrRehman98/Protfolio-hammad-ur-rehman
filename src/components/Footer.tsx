import { site } from '@/config/site';

export function Footer() {
  return (
    <footer>
      <div className="wrap foot-in">
        <span>
          {site.name} · {site.role}
        </span>
        <span>
          {site.location.city}, {site.location.country}
        </span>
      </div>
    </footer>
  );
}
