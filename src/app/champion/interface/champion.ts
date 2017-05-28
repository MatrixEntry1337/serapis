import {Spell} from './spell'
import {Skin} from './skin';
import {Stats} from './stat';
import {Info} from './info';

export interface Champion{
  id: number;
  key: string;
  title: string;
  name: string;
  lore: string;
  tags: string[];
  enemytips: string[];
  allytips: string[];
  info: Info[];
  spells: Spell[];
  skins: Skin[];
  stats: Stats;
}
