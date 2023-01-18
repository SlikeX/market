export function getNewID(n = 1): string {
  let result = '';
  const characters = '0123456789';

  for (let i = 0; i < n; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
