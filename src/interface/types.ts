interface IGameCard {
  name: string;
  first_release_date: Date;
  summary: string;
  rating: number;
  id: number
}

interface IFilter {
  name: string;
  score: number;
  sort: string
}

export type { IGameCard, IFilter }