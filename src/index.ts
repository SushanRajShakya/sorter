import {
  CharactersCollection,
  LinkedList,
  NumbersCollection,
  Sorter,
} from './classes';

const NUMBERS = [10, 4, 8, 0, -1, -5];
const numbersCollection = new NumbersCollection(NUMBERS);
numbersCollection.bubbleSort();
console.log(numbersCollection.data);

const CHARACTERS = 'SoRtablesTrinG';
const charactersColletion = new CharactersCollection(CHARACTERS);
charactersColletion.bubbleSort();
console.log(charactersColletion.data);

const linkedList = new LinkedList();
linkedList.add(12);
linkedList.add(1);
linkedList.add(5);
linkedList.add(-2);
linkedList.add(0);
linkedList.bubbleSort();
linkedList.print();
