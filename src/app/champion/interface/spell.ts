export interface Spell{
  key: string;
  name: string;
  description: string;
  range: number[];
  effectBurn: string[];
  cost: number[];
  maxrank: number;
  cooldown: number[];
  costType: string;
}
