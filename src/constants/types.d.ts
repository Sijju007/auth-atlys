export type User = {
  name: string;
  profile_img: string;
};

export type Post = {
  id: string;
  emoji: string;
  user: User;
  post: string;
  created_at: string;
  totalComments: number;
  isEdited?: boolean;
};
