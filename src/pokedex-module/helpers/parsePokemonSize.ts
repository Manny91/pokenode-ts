const parse = (value: number) => {
  return value / 10;
};

export const parseHeight = (value: number) => {
  return `${parse(value)}m`;
};
export const parseWeight = (value: number) => {
  return `${parse(value)}kg`;
};
