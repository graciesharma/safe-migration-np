import { useState } from 'react';
import { useAgencySearch } from '../hooks/useAgencySearch';
import { ResultCard } from './ResultCard';
import type { Lang } from '../types';
import { strings } from '../i18n/strings';

export function SearchBar({ lang }: { lang: Lang }) {
  const [query, setQuery] = useState('');
  const results = useAgencySearch(query);
  const t = strings[lang];
  const hasSearched = query.trim().length >= 2;

  return (
    <div className="w-full max-w-xl mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t.placeholder}
        className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl
                   focus:border-blue-500 focus:outline-none bg-white text-gray-900
                   placeholder:text-gray-400"
        autoFocus
      />

      {hasSearched && results.length === 0 && (
        <div className="mt-4 p-4 bg-red-50 border-2 border-red-400 rounded-xl text-left">
          <p className="text-red-800 font-bold text-lg">{t.notFound}</p>
          <p className="text-red-600 text-sm mt-1">{t.notFoundSub}</p>
        </div>
      )}

      <div className="mt-4 space-y-3">
        {results.map((agency) => (
          <ResultCard key={agency.id} agency={agency} lang={lang} />
        ))}
      </div>
    </div>
  );
}
