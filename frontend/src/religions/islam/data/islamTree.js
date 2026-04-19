export const islamTree = {
  id: 'islam',
  name: 'Islam',
  note: 'Root tradition',
  children: [
    {
      id: 'sunni',
      name: 'Sunni',
      note: '~87% of Muslims',
      children: [
        {
          id: 'hanafi',
          name: 'Hanafi',
          note: 'Largest school',
          children: [
            { id: 'deobandi', name: 'Deobandi', note: 'Revivalist' },
            { id: 'barelvi', name: 'Barelvi', note: 'Sufi-influenced' },
          ],
        },
        { id: 'maliki', name: 'Maliki', note: 'North Africa' },
        { id: 'shafii', name: "Shafi'i", note: 'E. Africa, SE Asia' },
        {
          id: 'hanbali',
          name: 'Hanbali',
          note: 'Arabian peninsula',
          children: [
            { id: 'salafi', name: 'Salafi / Wahhabi', note: 'Revivalist reform', contested: true },
          ],
        },
      ],
    },
    {
      id: 'shia',
      name: 'Shia',
      note: '~10–13% of Muslims',
      children: [
        { id: 'twelver', name: 'Twelver (Imami)', note: 'Largest Shia branch' },
        {
          id: 'ismaili',
          name: 'Ismaili',
          note: 'Seveners',
          children: [
            { id: 'nizari', name: 'Nizari', note: 'Aga Khan lineage' },
            { id: 'mustali', name: 'Mustali', note: 'Dawoodi Bohras' },
          ],
        },
        { id: 'zaydi', name: 'Zaydi', note: 'Yemen' },
        { id: 'alawi', name: 'Alawi', note: 'Syria', contested: true },
        { id: 'druze', name: 'Druze', note: 'Levant', contested: true },
      ],
    },
    {
      id: 'ibadi',
      name: 'Ibadi',
      note: 'Oman',
    },
    {
      id: 'sufism',
      name: 'Sufism',
      note: 'Mystical tradition',
      crossCuts: true,
      children: [
        { id: 'qadiriyya', name: 'Qadiriyya', note: 'Oldest order' },
        { id: 'naqshbandi', name: 'Naqshbandi', note: 'Central Asia' },
        { id: 'chishti', name: 'Chishti', note: 'South Asia' },
        { id: 'mevlevi', name: 'Mevlevi', note: 'Whirling dervishes' },
      ],
    },
  ],
};

/**
 * @param {string} id
 * @param {any} tree
 * @param {any[]} path
 * @returns {any}
 */
export function findNode(id, tree = islamTree, path = []) {
  if (tree.id === id) return { node: tree, path: [...path, tree] };
  if (!tree.children) return null;
  for (const child of tree.children) {
    const found = findNode(id, child, [...path, tree]);
    if (found) return found;
  }
  return null;
}

export function flattenTree(tree) {
  const result = [tree];
  if (tree.children) {
    for (const child of tree.children) {
      result.push(...flattenTree(child));
    }
  }
  return result;
}
