import { GithubUser } from './github-user.type';

export interface GithubUserResponse{
  total_count: number;
  incomplete_results: boolean;
  items: GithubUser[];
}
