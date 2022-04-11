export type ReviewType = {
  id: number;
  user: {
    id: number;
    name: string;
  };
  rating: number;
  comment: string;
  date: string;
}

export type Reviews = ReviewType[];

export type Review = {
  filmId: number;
  comment: string;
  rating: number;
}
