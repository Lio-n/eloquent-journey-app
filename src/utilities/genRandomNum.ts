const getRandomNum = (min = 10000, max = 99999): number => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomNum;
