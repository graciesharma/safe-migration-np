import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { useAgencyCount } from './hooks/useAgencySearch';
import { strings } from './i18n/strings';
import type { Lang } from './types';

function App() {
  const [lang, setLang] = useState<Lang>('ne');
  const t = strings[lang];
  const total = useAgencyCount();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white py-6 px-4">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{t.title}</h1>
            <p className="text-blue-100 text-sm mt-1">{t.subtitle}</p>
          </div>
          <button
            onClick={() => setLang(lang === 'ne' ? 'en' : 'ne')}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium
                       transition-colors cursor-pointer"
          >
            {t.langSwitch}
          </button>
        </div>
      </header>

      <main className="px-4 py-8">
        <SearchBar lang={lang} />
        <p className="text-center text-gray-400 text-sm mt-8">
          {total} {t.totalAgencies}
        </p>
      </main>

      <footer className="text-center text-gray-400 text-xs px-4 pb-6">
        {t.disclaimer}
      </footer>
    </div>
  );
}

export default App;
