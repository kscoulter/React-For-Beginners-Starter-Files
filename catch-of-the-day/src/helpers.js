export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export function getFunName() {
  const adjectives = ['adorable', 'gassy', 'clean', 'flaccid', 'elegant', 'fancy', 'glamorous', 'handsome', 'long', 'farty', 'old-fashioned', 'plain', 'quaint', 'sparkling', 'ugliest', 'unsightly', 'angry', 'patriotic', 'bigly', 'defeated', 'embarrassed', 'fierce', 'grumpy', 'helpless', 'itchy', 'jealous', 'gay', 'mysterious', 'nervous', 'obnoxious', 'panicky', 'repulsive', 'YUGE', 'thoughtless', 'uptight', 'worried', 'Murican'];

  const nouns = ['women', 'men', 'poop', 'teeth', 'people', 'leaves', 'mice', 'pimples', 'butts', 'knives', 'wives', 'rash', 'anuses', 'wombats', 'feminists', 'farts', 'parties', 'hitler', 'fungi', 'spankings', 'nipples', 'analyses', 'diagnoses', 'team', 'theses', 'crises', 'phenomena', 'criteria', 'data'];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
