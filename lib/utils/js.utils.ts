// 
const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

const convertStringWithCommasToNumber = (str: string) => Number.parseFloat(str.replace(/,/g, ''));

export { getRandomInt, convertStringWithCommasToNumber };
