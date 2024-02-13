export type TReview = {
  id: number;
  user: TUser;
  rating: number;
  body: string;
  answer: string | null;
  is_answered: boolean;
  created_at: string;
  updated_at: string;
};

export type TUser = {
  id: number;
  name: string;
};

export type TReviewRequest = {
  id: number;
  answer: string;
};

export type TReviewAnswerValue = {
  user: string;
  body: string;
  answer: string;
};
