import nerdamer from 'nerdamer-ts'

export function Polynom(str1: string, str2: string): string {
  const res = nerdamer(`expand((${str1})(${str2}))`)
    .toString()
    .split('')
    .filter((p) => p !== '*')
    .join('');
  return res
}

console.log(Polynom("x+1","x-1"))