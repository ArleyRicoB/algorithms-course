function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);

  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];

  let peque = lo - 1;

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      peque++;
      const tmp = arr[i];
      arr[i] = arr[peque];
      arr[peque] = tmp;
    }
  }

  peque++;
  arr[hi] = arr[peque];
  arr[peque] = pivot;

  return peque;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
