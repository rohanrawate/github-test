import { ApiConfig } from './api-config.type';

export interface AppConfigGlobal {
    api: {
        getGithubUser: ApiConfig;
        getUserRepos: ApiConfig;
    };
}


