import type { Agency, Lang } from '../types';
import { strings } from '../i18n/strings';

const badgeStyles = {
  licensed: 'bg-green-100 text-green-800 border-green-400',
  blacklisted: 'bg-red-100 text-red-800 border-red-400',
  expired: 'bg-yellow-100 text-yellow-800 border-yellow-400',
};

export function StatusBadge({ status, lang }: { status: Agency['status']; lang: Lang }) {
  const t = strings[lang];
  const label = t[status];
  const style = badgeStyles[status];

  return (
    <span className={`inline-block px-3 py-1 text-sm font-bold rounded-full border whitespace-nowrap ${style}`}>
      {label}
    </span>
  );
}
