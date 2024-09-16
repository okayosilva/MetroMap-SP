const colors: { [key: number]: string } = {
  1: 'bg-blue-800',
  2: 'bg-green-700',
  3: 'bg-red-700',
  4: 'bg-yellow-500',
  5: 'bg-purple-700',
  7: 'bg-rose-700',
  8: 'bg-sky-400',
  9: 'bg-emerald-500',
  10: 'bg-indigo-500',
  11: 'bg-orange-500',
  12: 'bg-green-500',
  13: 'bg-teal-500',
  15: 'bg-gray-400',

}

export function mappedColors(code: number): string | undefined {
  return colors[code];
}
