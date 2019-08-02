import { AppConfigGlobal } from './types/app-config.type';

const githubBaseUrl = 'https://api.github.com';

export const config: AppConfigGlobal = {
    api: {
        getGithubUser: {
            url: `${githubBaseUrl}/search/users`,
        },
        getUserRepos: {
            url: `${githubBaseUrl}/users`,
        },
    }
};
