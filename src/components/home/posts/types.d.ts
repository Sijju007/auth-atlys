import { MouseEventHandler } from 'react';

export type CreatePostProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
};

export type PostProps = {
  emoji: string;
  username: string;
  userProfileImage: string;
  createdAt: string;
  post: string;
  totalComments: number;
  isEdited?: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
};

export type PostsProps = {
  onPostClick: Function;
};
