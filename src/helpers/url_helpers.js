
// export const repForSlashWithOr = (str) => {
//   if (str.includes('/')) {
//     if (str === 'Other/Unknown') return 'Other or Unknown';
//     const chars = str.split('');
//     const newChars = chars.map(l => l === '/' ? "or" : l);
//     return newChars.join('');
//   }
//   return str;
// };

export const removeOriginFromPath = (orgStr, pathStr) => {
  const charToRem = orgStr.length + 1;
  return pathStr.slice(charToRem);
};