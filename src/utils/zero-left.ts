/* eslint-disable prettier/prettier */
export function zeroLeft(n: number) {
  return Math.floor(n).toString().padStart(2, '0')
}