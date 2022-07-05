import { AwesomeBooks } from './modules/storeData.js';
import * as fun from './modules/nav.js';
import { DateTime } from './modules/luxon.js';

const books = new AwesomeBooks();

books.handlesubmit();
books.getData();
books.checkLocal();
books.remover();

const now = DateTime.now().toLocaleString();

document.querySelector('.date').innerHTML = now;

fun.addBook();