import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubService } from '@core/services/github/github.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  const GithubServiceMock: GithubService = {
    getAllProjects: jasmine.createSpy().and.returnValue(
      of([
        {
          id: 489385583,
          node_id: 'R_kgDOHStubw',
          name: 'backendDannielDev',
          full_name: 'DannielNavas/backendDannielDev',
          private: false,
          owner: {
            login: 'DannielNavas',
            id: 7865626,
            node_id: 'MDQ6VXNlcjc4NjU2MjY=',
            avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/DannielNavas',
            html_url: 'https://github.com/DannielNavas',
            followers_url:
              'https://api.github.com/users/DannielNavas/followers',
            following_url:
              'https://api.github.com/users/DannielNavas/following{/other_user}',
            gists_url:
              'https://api.github.com/users/DannielNavas/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/DannielNavas/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/DannielNavas/subscriptions',
            organizations_url: 'https://api.github.com/users/DannielNavas/orgs',
            repos_url: 'https://api.github.com/users/DannielNavas/repos',
            events_url:
              'https://api.github.com/users/DannielNavas/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/DannielNavas/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/DannielNavas/backendDannielDev',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/DannielNavas/backendDannielDev',
          forks_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/forks',
          keys_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/teams',
          hooks_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/hooks',
          issue_events_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/events',
          assignees_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/branches{/branch}',
          tags_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/tags',
          blobs_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/languages',
          stargazers_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/stargazers',
          contributors_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/contributors',
          subscribers_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/subscribers',
          subscription_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/subscription',
          commits_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/merges',
          archive_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/downloads',
          issues_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/labels{/name}',
          releases_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/deployments',
          created_at: '2022-05-06T14:29:46Z',
          updated_at: '2022-05-06T19:59:38Z',
          pushed_at: '2022-05-06T21:17:25Z',
          git_url: 'git://github.com/DannielNavas/backendDannielDev.git',
          ssh_url: 'git@github.com:DannielNavas/backendDannielDev.git',
          clone_url: 'https://github.com/DannielNavas/backendDannielDev.git',
          svn_url: 'https://github.com/DannielNavas/backendDannielDev',
          homepage: 'https://backend-danniel-dev.vercel.app',
          size: 180,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'TypeScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          topics: ['backend', 'devto', 'github', 'personal-website'],
          visibility: 'public',
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'main',
        },
        {
          id: 495213545,
          node_id: 'R_kgDOHYRb6Q',
          name: 'card-html-css',
          full_name: 'DannielNavas/card-html-css',
          private: false,
          owner: {
            login: 'DannielNavas',
            id: 7865626,
            node_id: 'MDQ6VXNlcjc4NjU2MjY=',
            avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/DannielNavas',
            html_url: 'https://github.com/DannielNavas',
            followers_url:
              'https://api.github.com/users/DannielNavas/followers',
            following_url:
              'https://api.github.com/users/DannielNavas/following{/other_user}',
            gists_url:
              'https://api.github.com/users/DannielNavas/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/DannielNavas/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/DannielNavas/subscriptions',
            organizations_url: 'https://api.github.com/users/DannielNavas/orgs',
            repos_url: 'https://api.github.com/users/DannielNavas/repos',
            events_url:
              'https://api.github.com/users/DannielNavas/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/DannielNavas/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/DannielNavas/card-html-css',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/DannielNavas/card-html-css',
          forks_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/forks',
          keys_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/teams',
          hooks_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/hooks',
          issue_events_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/events',
          assignees_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/branches{/branch}',
          tags_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/tags',
          blobs_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/languages',
          stargazers_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/stargazers',
          contributors_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/contributors',
          subscribers_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/subscribers',
          subscription_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/subscription',
          commits_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/merges',
          archive_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/downloads',
          issues_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/labels{/name}',
          releases_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/deployments',
          created_at: '2022-05-23T00:47:53Z',
          updated_at: '2022-05-23T00:47:59Z',
          pushed_at: '2022-05-23T00:47:56Z',
          git_url: 'git://github.com/DannielNavas/card-html-css.git',
          ssh_url: 'git@github.com:DannielNavas/card-html-css.git',
          clone_url: 'https://github.com/DannielNavas/card-html-css.git',
          svn_url: 'https://github.com/DannielNavas/card-html-css',
          homepage: null,
          size: 0,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'HTML',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          topics: [],
          visibility: 'public',
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master',
        },
        {
          id: 458237512,
          node_id: 'R_kgDOG1AmSA',
          name: 'clean-code-javascript-es',
          full_name: 'DannielNavas/clean-code-javascript-es',
          private: false,
          owner: {
            login: 'DannielNavas',
            id: 7865626,
            node_id: 'MDQ6VXNlcjc4NjU2MjY=',
            avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/DannielNavas',
            html_url: 'https://github.com/DannielNavas',
            followers_url:
              'https://api.github.com/users/DannielNavas/followers',
            following_url:
              'https://api.github.com/users/DannielNavas/following{/other_user}',
            gists_url:
              'https://api.github.com/users/DannielNavas/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/DannielNavas/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/DannielNavas/subscriptions',
            organizations_url: 'https://api.github.com/users/DannielNavas/orgs',
            repos_url: 'https://api.github.com/users/DannielNavas/repos',
            events_url:
              'https://api.github.com/users/DannielNavas/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/DannielNavas/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/DannielNavas/clean-code-javascript-es',
          description: 'Clean Code traducido al Español ',
          fork: true,
          url: 'https://api.github.com/repos/DannielNavas/clean-code-javascript-es',
          forks_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/forks',
          keys_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/teams',
          hooks_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/hooks',
          issue_events_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/events',
          assignees_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/branches{/branch}',
          tags_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/tags',
          blobs_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/languages',
          stargazers_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/stargazers',
          contributors_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/contributors',
          subscribers_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/subscribers',
          subscription_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/subscription',
          commits_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/merges',
          archive_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/downloads',
          issues_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/labels{/name}',
          releases_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/deployments',
          created_at: '2022-02-11T15:20:10Z',
          updated_at: '2022-02-11T15:20:08Z',
          pushed_at: '2022-02-01T14:05:48Z',
          git_url: 'git://github.com/DannielNavas/clean-code-javascript-es.git',
          ssh_url: 'git@github.com:DannielNavas/clean-code-javascript-es.git',
          clone_url:
            'https://github.com/DannielNavas/clean-code-javascript-es.git',
          svn_url: 'https://github.com/DannielNavas/clean-code-javascript-es',
          homepage: '',
          size: 332,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: false,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: 'mit',
            name: 'MIT License',
            spdx_id: 'MIT',
            url: 'https://api.github.com/licenses/mit',
            node_id: 'MDc6TGljZW5zZTEz',
          },
          allow_forking: true,
          is_template: false,
          topics: [],
          visibility: 'public',
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master',
        },
        {
          id: 304179535,
          node_id: 'MDEwOlJlcG9zaXRvcnkzMDQxNzk1MzU=',
          name: 'dannieldev',
          full_name: 'DannielNavas/dannieldev',
          private: false,
          owner: {
            login: 'DannielNavas',
            id: 7865626,
            node_id: 'MDQ6VXNlcjc4NjU2MjY=',
            avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/DannielNavas',
            html_url: 'https://github.com/DannielNavas',
            followers_url:
              'https://api.github.com/users/DannielNavas/followers',
            following_url:
              'https://api.github.com/users/DannielNavas/following{/other_user}',
            gists_url:
              'https://api.github.com/users/DannielNavas/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/DannielNavas/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/DannielNavas/subscriptions',
            organizations_url: 'https://api.github.com/users/DannielNavas/orgs',
            repos_url: 'https://api.github.com/users/DannielNavas/repos',
            events_url:
              'https://api.github.com/users/DannielNavas/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/DannielNavas/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/DannielNavas/dannieldev',
          description:
            'Página personal donde se muestra proyectos post e información personal, desarrollada en angular, con consumo de apis como Github dev.to y youtube',
          fork: false,
          url: 'https://api.github.com/repos/DannielNavas/dannieldev',
          forks_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/forks',
          keys_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/teams',
          hooks_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/hooks',
          issue_events_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/events',
          assignees_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/branches{/branch}',
          tags_url: 'https://api.github.com/repos/DannielNavas/dannieldev/tags',
          blobs_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/languages',
          stargazers_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/stargazers',
          contributors_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/contributors',
          subscribers_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/subscribers',
          subscription_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/subscription',
          commits_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/merges',
          archive_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/downloads',
          issues_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/labels{/name}',
          releases_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/deployments',
          created_at: '2020-10-15T01:40:35Z',
          updated_at: '2022-01-19T00:03:39Z',
          pushed_at: '2022-05-17T00:04:43Z',
          git_url: 'git://github.com/DannielNavas/dannieldev.git',
          ssh_url: 'git@github.com:DannielNavas/dannieldev.git',
          clone_url: 'https://github.com/DannielNavas/dannieldev.git',
          svn_url: 'https://github.com/DannielNavas/dannieldev',
          homepage: 'https://danniel.dev',
          size: 25072,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'TypeScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 1,
          license: {
            key: 'mit',
            name: 'MIT License',
            spdx_id: 'MIT',
            url: 'https://api.github.com/licenses/mit',
            node_id: 'MDc6TGljZW5zZTEz',
          },
          allow_forking: true,
          is_template: false,
          topics: ['angular', 'personal', 'personal-blog', 'personal-website'],
          visibility: 'public',
          forks: 0,
          open_issues: 1,
          watchers: 0,
          default_branch: 'main',
        },
      ])
    ),
  } as any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      imports: [SharedModule],
      providers: [{ provide: GithubService, useValue: GithubServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Share', () => {
    navigator.share = jasmine.createSpy('navigator.share');
    component.share('Hola');
    expect(navigator.share).toHaveBeenCalled();
  });

  it('should Share error', () => {
    navigator.share = jasmine.createSpy().and.returnValues(Promise.reject());
    component.share('Hola');
    expect(component).toBeTruthy();
  });
});
