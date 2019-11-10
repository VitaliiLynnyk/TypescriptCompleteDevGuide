import { Sorter } from './Sorter';
import { LinkedList } from './LinkedList';
import { NumbersCollections } from './NumbersCollections';
import { CharactersCollection } from './CharactersCollection';

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(8);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();

console.log(linkedList.print);
