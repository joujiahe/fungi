export const truncateMiddle = (str: string = "", maxLength: number): string => {
  if (str.length <= maxLength) {
    return str;
  }

  const ellipsis = "...";
  const ellipsisLength = ellipsis.length;

  const leftLength = Math.ceil((maxLength - ellipsisLength) / 2);
  const rightLength = Math.floor((maxLength - ellipsisLength) / 2);

  const left = str.slice(0, leftLength);
  const right = str.slice(-rightLength);

  return left + ellipsis + right;
};
