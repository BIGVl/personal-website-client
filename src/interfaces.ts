export interface ArticleSummary {
  author: {
    _id: string;
    firstName?: string;
    lastName?: string;
  };
  createdAt: Date;
  title: string;
  _id: string;
}
