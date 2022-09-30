let count = 0;
export function increase() {
  // 외부에서도 노출한다는 export (변수에도 사용가능)
  count++;
  console.log(count);
}
export function getCount() {
  return count;
}
