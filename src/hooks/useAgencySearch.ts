import { useMemo, useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import type { Agency } from '../types';

let fuse: Fuse<Agency> | null = null;
let allAgencies: Agency[] = [];
let loadPromise: Promise<void> | null = null;

function loadData(): Promise<void> {
  if (loadPromise) return loadPromise;
  loadPromise = import('../data/agencies.json').then((mod) => {
    allAgencies = mod.default as Agency[];
    fuse = new Fuse(allAgencies, {
      keys: [
        { name: 'name', weight: 2 },
        { name: 'licenseNumber', weight: 2 },
        { name: 'district', weight: 1 },
        { name: 'address', weight: 0.5 },
        { name: 'phone', weight: 1 },
        { name: 'mobile', weight: 1 },
      ],
      threshold: 0.4,
      includeScore: true,
    });
  });
  return loadPromise;
}

export function useAgencySearch(query: string): Agency[] {
  const [ready, setReady] = useState(fuse !== null);

  useEffect(() => {
    if (!ready) {
      loadData().then(() => setReady(true));
    }
  }, [ready]);

  return useMemo(() => {
    if (!fuse || query.trim().length < 2) return [];
    return fuse.search(query, { limit: 20 }).map((r) => r.item);
  }, [query, ready]);
}

export function useAgencyCount(): number {
  const [count, setCount] = useState(allAgencies.length);

  useEffect(() => {
    loadData().then(() => setCount(allAgencies.length));
  }, []);

  return count;
}
