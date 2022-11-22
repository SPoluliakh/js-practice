import json from '../../json/fake-api-02.json';
import { Filter } from './class';
import { mainMarkup } from './main-murkup.js';
import {
  filter_1El,
  filter_2El,
  filter_3El,
  list_1El,
  list_2El,
  list_3El,
  mainListEl,
} from './refs.js';

const { data } = json;

mainListEl.innerHTML = mainMarkup(data);

const sortByName = new Filter(
  data,
  filter_1El,
  list_1El,
  'name',
  'rating'
).init();

const sortByStatus = new Filter(
  data,
  filter_2El,
  list_2El,
  'status',
  'rating'
).init();

const sortByRating = new Filter(
  data,
  filter_3El,
  list_3El,
  'mail',
  'rating'
).init();
