import { Post } from './Post';

export interface FrontPageResponse {
  data: {
    after: string;
    before: string;
    children: ChildrenMember[];
    dist: number;
    modhash: string;
  };
}

export interface ChildrenMember {
  kind: string;
  data: Post;
}
