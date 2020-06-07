export interface IFreeChampionIds {
  id: number;
}

export interface IChampionRotationIds {
  freeChampionIds: Array<number>
}

export interface IDynamicObject {
  [key: string]: object
}
