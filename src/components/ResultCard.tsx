import type { Agency, Lang } from '../types';
import { strings } from '../i18n/strings';
import { StatusBadge } from './StatusBadge';

export function ResultCard({ agency, lang }: { agency: Agency; lang: Lang }) {
  const t = strings[lang];
  const name = agency.name;
  const address = agency.address;

  return (
    <div className="p-4 border border-gray-200 rounded-xl shadow-sm bg-white text-left">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-gray-900 break-words">{name}</h3>
          {agency.licenseNumber && (
            <p className="text-sm text-gray-500">{t.license}: {agency.licenseNumber}</p>
          )}
          {agency.district && (
            <p className="text-sm text-gray-600">{agency.district}</p>
          )}
          {address && <p className="text-sm text-gray-500">{address}</p>}
          {agency.phone && (
            <p className="text-sm text-gray-600">Tel: {agency.phone}</p>
          )}
          {agency.mobile && (
            <p className="text-sm text-gray-600">Mobile: {agency.mobile}</p>
          )}
          {agency.email && (
            <p className="text-xs text-gray-400 mt-1">{agency.email}</p>
          )}
          {agency.blacklistReason && (
            <p className="text-xs text-red-500 mt-1">
              {t.reason}: {agency.blacklistReason}
            </p>
          )}
        </div>
        <StatusBadge status={agency.status} lang={lang} />
      </div>
    </div>
  );
}
