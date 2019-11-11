import { CsvFileReader } from './CsvFileReader';

const matchs = new CsvFileReader('football.csv');
matchs.read();

console.log(matchs.data);
