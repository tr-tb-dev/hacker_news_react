export interface HNItem {
  id: number;
  deleted?: boolean;
  type?: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
  by?: string;
  time?: number;
  text?: string;
  dead?: boolean;
  parent?: number;
  poll?: number;
  kids?: number[];
  url?: string;
  score?: number;
  title?: string;
  parts?: number[];
  descendants?: number;
}

export interface PostsState {
  newPostItems: Partial<HNItem>[];
  topPostItems: Partial<HNItem>[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
}
