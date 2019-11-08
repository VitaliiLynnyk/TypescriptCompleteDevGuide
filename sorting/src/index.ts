import { LinkedList } from './LinkedList';
import { Sorter } from './Sorter';
import { NumbersCollections } from './NumbersCollections';
import { CharactersCollection } from './CharactersCollection';

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(8);
linkedList.add(-3);
linkedList.add(4);

const numbersCollection = new CharactersCollection('trolololsabfdcbb');
const sorter = new Sorter(linkedList);
sorter.sort();
console.log(linkedList.print);
