import { Sorter } from './Sorter';
import { NumbersCollections } from './NumbersCollections';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new CharactersCollection('trolololsabfdcbb');
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter);
