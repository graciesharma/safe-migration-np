export interface Agency {
  id: string;
  name: string;
  nameNepali: string | null;
  licenseNumber: string | null;
  status: 'licensed' | 'blacklisted' | 'expired';
  statusDetail: string;
  ownerName: string | null;
  ownerNameNepali: string | null;
  phone: string | null;
  mobile: string | null;
  email: string | null;
  address: string | null;
  addressNepali: string | null;
  district: string | null;
  destinations: string[];
  licenseExpiry: string | null;
  blacklistedDate: string | null;
  blacklistReason: string | null;
  website: string | null;
}

export type Lang = 'en' | 'ne';
