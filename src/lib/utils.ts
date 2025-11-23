export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

export function generateLocalSEOKeywords(serviceName: string, city: string = 'San Antonio', state: string = 'TX'): string[] {
  const baseKeywords = [
    'professional car detailing',
    'auto detailing service',
    'car wash',
    'vehicle detailing',
    'paint protection',
    'ceramic coating',
    'paint correction',
    'interior detailing',
    'exterior detailing',
    `${city}`,
    `${state}`,
    'San Antonio car detailing',
    'San Antonio auto detailing',
    'Alamo Heights car detailing',
    'Stone Oak auto detailing',
    'Dominion car detailing',
    'Terrell Hills detailing',
    'Olmos Park car service',
    'Shavano Park detailing',
    'Castle Hills car wash'
  ];

  const premiumNeighborhoods = [
    'Alamo Heights',
    'Stone Oak',
    'Dominion',
    'Terrell Hills',
    'Olmos Park',
    'Shavano Park',
    'Castle Hills',
    'Leon Valley',
    'Windcrest',
    'Hollywood Park',
    'Balcones Heights'
  ];

  const serviceKeywords: { [key: string]: string[] } = {
    'exterior hand wash': ['hand wash', 'exterior wash', 'paint sealant', 'car exterior', 'premium exterior care'],
    'interior deep cleansing': ['interior detailing', 'car interior', 'deep clean', 'interior cleaning', 'luxury interior care'],
    'paint correction': ['paint correction', 'swirl removal', 'scratch removal', 'paint restoration', 'automotive restoration'],
    'ceramic coating': ['ceramic coating', 'paint protection', 'nano coating', 'long-term protection', 'premium coating'],
    'headlight restoration': ['headlight restoration', 'headlight cleaning', 'lens restoration', 'headlight clarity', 'automotive safety'],
    'full detail': ['full detail', 'complete detailing', 'full service detail', 'comprehensive detailing', 'complete vehicle care']
  };

  const serviceKey = serviceName.toLowerCase();
  const specificKeywords = Object.keys(serviceKeywords).find(key => serviceKey.includes(key));
  
  // Add neighborhood-specific long-tail keywords
  const neighborhoodKeywords = premiumNeighborhoods.flatMap(neighborhood => [
    `${serviceName.toLowerCase()} ${neighborhood}`,
    `${serviceName.toLowerCase()} in ${neighborhood}`,
    `${serviceName.toLowerCase()} near ${neighborhood}`
  ]);
  
  const combinedKeywords = specificKeywords
    ? [...baseKeywords, ...serviceKeywords[specificKeywords]]
    : baseKeywords;
    
  return [...combinedKeywords, ...neighborhoodKeywords];
}