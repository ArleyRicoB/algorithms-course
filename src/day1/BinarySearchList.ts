// ORDERED LIST

export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length;

  do {
    let middlePoint = Math.floor(low + (high - low) / 2);
    const value = haystack[middlePoint];

    if (value === needle) return true;
    if (value > needle) high = middlePoint;
    else low = middlePoint + 1;
  } while (low < high);

  return false;
}

/* Recursion */
export function bs_list_recursion(haystack: number[], needle: number): boolean {
  if (haystack.length === 0) return false;
  const middlePoint = Math.floor(haystack.length / 2);
  const value = haystack[middlePoint];

  if (value === needle) return true;
  if (value > needle) return bs_list_recursion(haystack.slice(0, middlePoint), needle);
  if (value < needle)
    return bs_list_recursion(haystack.slice(middlePoint + 1, haystack.length), needle);

  return false;
}
