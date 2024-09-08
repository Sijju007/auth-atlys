import { Post } from './types';

export const posts: Post[] = [
  {
    id: 'user_1',
    emoji: '👋',
    user: {
      name: 'Theresa Webb',
      profile_img: '/images/profile-images/profile-1.png',
    },
    post: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    created_at: '5mins ago',
    totalComments: 24,
  },
  {
    id: 'user_2',
    emoji: '😞',
    user: {
      name: 'Marvin McKinney',
      profile_img: '/images/profile-images/profile-2.png',
    },
    post: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    created_at: '8mins ago',
    totalComments: 15,
    isEdited: true,
  },
];
