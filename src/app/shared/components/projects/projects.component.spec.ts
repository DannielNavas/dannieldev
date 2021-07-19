import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { GithubService } from 'src/app/core/services/github/github.service';

import { ProjectsComponent } from './projects.component';

class MockGithubService {
  getRepos(): any {
    return of([
      {
        id: 150909349,
        node_id: 'MDEwOlJlcG9zaXRvcnkxNTA5MDkzNDk=',
        name: 'angularSpotify',
        full_name: 'DannielNavas/angularSpotify',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/angularSpotify',
        description:
          'Proyecto en Angular 7 en el que se muestran los artistas y los álbum conectando al API de Spotify ',
        fork: false,
        url: 'https://api.github.com/repos/DannielNavas/angularSpotify',
        forks_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/teams',
        hooks_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/angularSpotify/deployments',
        created_at: '2018-09-29T22:55:41Z',
        updated_at: '2020-02-11T03:25:45Z',
        pushed_at: '2020-04-30T00:11:55Z',
        git_url: 'git://github.com/DannielNavas/angularSpotify.git',
        ssh_url: 'git@github.com:DannielNavas/angularSpotify.git',
        clone_url: 'https://github.com/DannielNavas/angularSpotify.git',
        svn_url: 'https://github.com/DannielNavas/angularSpotify',
        homepage: '',
        size: 201,
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
        license: null,
        forks: 0,
        open_issues: 1,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 193814560,
        node_id: 'MDEwOlJlcG9zaXRvcnkxOTM4MTQ1NjA=',
        name: 'backend',
        full_name: 'DannielNavas/backend',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/backend',
        description:
          'Proyecto backend en el que se generan contratos digitales y almacena firmas digitales encriptadas ',
        fork: false,
        url: 'https://api.github.com/repos/DannielNavas/backend',
        forks_url: 'https://api.github.com/repos/DannielNavas/backend/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/backend/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/backend/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/DannielNavas/backend/teams',
        hooks_url: 'https://api.github.com/repos/DannielNavas/backend/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/backend/issues/events{/number}',
        events_url: 'https://api.github.com/repos/DannielNavas/backend/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/backend/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/backend/branches{/branch}',
        tags_url: 'https://api.github.com/repos/DannielNavas/backend/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/backend/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/backend/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/backend/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/backend/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/backend/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/backend/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/backend/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/backend/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/backend/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/backend/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/backend/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/backend/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/backend/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/backend/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/backend/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/backend/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/DannielNavas/backend/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/backend/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/backend/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/backend/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/backend/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/backend/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/backend/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/backend/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/backend/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/backend/deployments',
        created_at: '2019-06-26T02:24:29Z',
        updated_at: '2021-06-06T03:22:04Z',
        pushed_at: '2021-06-06T03:22:10Z',
        git_url: 'git://github.com/DannielNavas/backend.git',
        ssh_url: 'git@github.com:DannielNavas/backend.git',
        clone_url: 'https://github.com/DannielNavas/backend.git',
        svn_url: 'https://github.com/DannielNavas/backend',
        homepage: '',
        size: 4897,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
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
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 308487523,
        node_id: 'MDEwOlJlcG9zaXRvcnkzMDg0ODc1MjM=',
        name: 'curriculum',
        full_name: 'DannielNavas/curriculum',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/curriculum',
        description: 'project in angle to show Résumé ',
        fork: false,
        url: 'https://api.github.com/repos/DannielNavas/curriculum',
        forks_url: 'https://api.github.com/repos/DannielNavas/curriculum/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/curriculum/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/curriculum/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/DannielNavas/curriculum/teams',
        hooks_url: 'https://api.github.com/repos/DannielNavas/curriculum/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/curriculum/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/DannielNavas/curriculum/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/curriculum/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/curriculum/branches{/branch}',
        tags_url: 'https://api.github.com/repos/DannielNavas/curriculum/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/curriculum/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/curriculum/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/curriculum/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/curriculum/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/curriculum/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/curriculum/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/curriculum/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/curriculum/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/curriculum/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/curriculum/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/curriculum/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/curriculum/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/curriculum/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/curriculum/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/curriculum/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/curriculum/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/DannielNavas/curriculum/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/curriculum/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/curriculum/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/curriculum/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/curriculum/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/curriculum/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/curriculum/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/curriculum/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/curriculum/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/curriculum/deployments',
        created_at: '2020-10-30T00:55:52Z',
        updated_at: '2020-10-30T01:49:10Z',
        pushed_at: '2021-05-27T01:23:09Z',
        git_url: 'git://github.com/DannielNavas/curriculum.git',
        ssh_url: 'git@github.com:DannielNavas/curriculum.git',
        clone_url: 'https://github.com/DannielNavas/curriculum.git',
        svn_url: 'https://github.com/DannielNavas/curriculum',
        homepage: null,
        size: 159,
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
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        description: 'Proyecto de pagina personal, desarrollada en Angular 11',
        fork: false,
        url: 'https://api.github.com/repos/DannielNavas/dannieldev',
        forks_url: 'https://api.github.com/repos/DannielNavas/dannieldev/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/dannieldev/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/dannieldev/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/DannielNavas/dannieldev/teams',
        hooks_url: 'https://api.github.com/repos/DannielNavas/dannieldev/hooks',
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
        updated_at: '2021-06-11T00:36:11Z',
        pushed_at: '2021-06-11T00:47:21Z',
        git_url: 'git://github.com/DannielNavas/dannieldev.git',
        ssh_url: 'git@github.com:DannielNavas/dannieldev.git',
        clone_url: 'https://github.com/DannielNavas/dannieldev.git',
        svn_url: 'https://github.com/DannielNavas/dannieldev',
        homepage: 'https://danniel.dev',
        size: 5850,
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
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'main',
      },
      {
        id: 279131263,
        node_id: 'MDEwOlJlcG9zaXRvcnkyNzkxMzEyNjM=',
        name: 'DannielNavas',
        full_name: 'DannielNavas/DannielNavas',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/DannielNavas',
        description: 'Perfil personal',
        fork: false,
        url: 'https://api.github.com/repos/DannielNavas/DannielNavas',
        forks_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/teams',
        hooks_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/branches{/branch}',
        tags_url: 'https://api.github.com/repos/DannielNavas/DannielNavas/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/DannielNavas/deployments',
        created_at: '2020-07-12T19:12:04Z',
        updated_at: '2021-04-19T12:44:31Z',
        pushed_at: '2021-04-19T12:44:28Z',
        git_url: 'git://github.com/DannielNavas/DannielNavas.git',
        ssh_url: 'git@github.com:DannielNavas/DannielNavas.git',
        clone_url: 'https://github.com/DannielNavas/DannielNavas.git',
        svn_url: 'https://github.com/DannielNavas/DannielNavas',
        homepage: null,
        size: 12,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
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
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 143080965,
        node_id: 'MDEwOlJlcG9zaXRvcnkxNDMwODA5NjU=',
        name: 'freelanceP',
        full_name: 'DannielNavas/freelanceP',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/freelanceP',
        description:
          'Proyecto de contratación online con nodejs y angular versión 1 ',
        fork: false,
        url: 'https://api.github.com/repos/DannielNavas/freelanceP',
        forks_url: 'https://api.github.com/repos/DannielNavas/freelanceP/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/DannielNavas/freelanceP/teams',
        hooks_url: 'https://api.github.com/repos/DannielNavas/freelanceP/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/branches{/branch}',
        tags_url: 'https://api.github.com/repos/DannielNavas/freelanceP/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/freelanceP/deployments',
        created_at: '2018-07-31T23:41:53Z',
        updated_at: '2021-05-24T01:30:47Z',
        pushed_at: '2021-05-27T05:45:11Z',
        git_url: 'git://github.com/DannielNavas/freelanceP.git',
        ssh_url: 'git@github.com:DannielNavas/freelanceP.git',
        clone_url: 'https://github.com/DannielNavas/freelanceP.git',
        svn_url: 'https://github.com/DannielNavas/freelanceP',
        homepage: '',
        size: 17754,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 7,
        license: null,
        forks: 0,
        open_issues: 7,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 347769853,
        node_id: 'MDEwOlJlcG9zaXRvcnkzNDc3Njk4NTM=',
        name: 'freya',
        full_name: 'DannielNavas/freya',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/freya',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/DannielNavas/freya',
        forks_url: 'https://api.github.com/repos/DannielNavas/freya/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/freya/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/freya/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/DannielNavas/freya/teams',
        hooks_url: 'https://api.github.com/repos/DannielNavas/freya/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/freya/issues/events{/number}',
        events_url: 'https://api.github.com/repos/DannielNavas/freya/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/freya/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/freya/branches{/branch}',
        tags_url: 'https://api.github.com/repos/DannielNavas/freya/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/freya/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/freya/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/freya/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/freya/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/freya/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/freya/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/freya/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/freya/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/freya/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/freya/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/freya/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/freya/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/freya/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/freya/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/freya/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/freya/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/DannielNavas/freya/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/freya/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/freya/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/freya/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/freya/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/freya/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/freya/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/freya/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/freya/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/freya/deployments',
        created_at: '2021-03-14T22:28:15Z',
        updated_at: '2021-03-14T23:53:06Z',
        pushed_at: '2021-03-14T23:53:04Z',
        git_url: 'git://github.com/DannielNavas/freya.git',
        ssh_url: 'git@github.com:DannielNavas/freya.git',
        clone_url: 'https://github.com/DannielNavas/freya.git',
        svn_url: 'https://github.com/DannielNavas/freya',
        homepage: null,
        size: 161,
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
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'main',
      },
      {
        id: 300787850,
        node_id: 'MDEwOlJlcG9zaXRvcnkzMDA3ODc4NTA=',
        name: 'globalenterprise',
        full_name: 'DannielNavas/globalenterprise',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/globalenterprise',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/DannielNavas/globalenterprise',
        forks_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/teams',
        hooks_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/globalenterprise/deployments',
        created_at: '2020-10-03T03:31:34Z',
        updated_at: '2020-10-03T03:31:38Z',
        pushed_at: '2020-10-03T03:43:12Z',
        git_url: 'git://github.com/DannielNavas/globalenterprise.git',
        ssh_url: 'git@github.com:DannielNavas/globalenterprise.git',
        clone_url: 'https://github.com/DannielNavas/globalenterprise.git',
        svn_url: 'https://github.com/DannielNavas/globalenterprise',
        homepage: null,
        size: 23622,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
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
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'main',
      },
      {
        id: 192029584,
        node_id: 'MDEwOlJlcG9zaXRvcnkxOTIwMjk1ODQ=',
        name: 'grado',
        full_name: 'DannielNavas/grado',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/grado',
        description:
          'Proyecto de grado universidad unipanamericana, se encarga de generar contratos con forma digital ',
        fork: false,
        url: 'https://api.github.com/repos/DannielNavas/grado',
        forks_url: 'https://api.github.com/repos/DannielNavas/grado/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/grado/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/grado/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/DannielNavas/grado/teams',
        hooks_url: 'https://api.github.com/repos/DannielNavas/grado/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/grado/issues/events{/number}',
        events_url: 'https://api.github.com/repos/DannielNavas/grado/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/grado/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/grado/branches{/branch}',
        tags_url: 'https://api.github.com/repos/DannielNavas/grado/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/grado/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/grado/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/grado/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/grado/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/grado/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/grado/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/grado/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/grado/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/grado/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/grado/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/grado/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/grado/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/grado/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/grado/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/grado/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/grado/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/DannielNavas/grado/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/grado/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/grado/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/grado/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/grado/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/grado/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/grado/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/grado/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/grado/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/grado/deployments',
        created_at: '2019-06-15T02:55:28Z',
        updated_at: '2020-05-28T14:30:54Z',
        pushed_at: '2021-05-27T13:36:13Z',
        git_url: 'git://github.com/DannielNavas/grado.git',
        ssh_url: 'git@github.com:DannielNavas/grado.git',
        clone_url: 'https://github.com/DannielNavas/grado.git',
        svn_url: 'https://github.com/DannielNavas/grado',
        homepage: '',
        size: 49867,
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
        open_issues_count: 10,
        license: null,
        forks: 0,
        open_issues: 10,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 152350803,
        node_id: 'MDEwOlJlcG9zaXRvcnkxNTIzNTA4MDM=',
        name: 'hacktoberfest',
        full_name: 'DannielNavas/hacktoberfest',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/hacktoberfest',
        description:
          'Hacktoberfest | Simple website for contributors of #hacktoberfest',
        fork: true,
        url: 'https://api.github.com/repos/DannielNavas/hacktoberfest',
        forks_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/teams',
        hooks_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/hacktoberfest/deployments',
        created_at: '2018-10-10T02:26:39Z',
        updated_at: '2018-10-12T17:28:05Z',
        pushed_at: '2018-10-12T17:28:02Z',
        git_url: 'git://github.com/DannielNavas/hacktoberfest.git',
        ssh_url: 'git@github.com:DannielNavas/hacktoberfest.git',
        clone_url: 'https://github.com/DannielNavas/hacktoberfest.git',
        svn_url: 'https://github.com/DannielNavas/hacktoberfest',
        homepage: 'https://niklasschmitt.github.io/hacktoberfest/',
        size: 182,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'HTML',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
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
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 292738482,
        node_id: 'MDEwOlJlcG9zaXRvcnkyOTI3Mzg0ODI=',
        name: 'marisolenlaweb',
        full_name: 'DannielNavas/marisolenlaweb',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/marisolenlaweb',
        description: 'Este es mi repositorio personal.',
        fork: true,
        url: 'https://api.github.com/repos/DannielNavas/marisolenlaweb',
        forks_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/teams',
        hooks_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/marisolenlaweb/deployments',
        created_at: '2020-09-04T03:22:41Z',
        updated_at: '2020-09-04T03:22:43Z',
        pushed_at: '2020-08-01T00:20:54Z',
        git_url: 'git://github.com/DannielNavas/marisolenlaweb.git',
        ssh_url: 'git@github.com:DannielNavas/marisolenlaweb.git',
        clone_url: 'https://github.com/DannielNavas/marisolenlaweb.git',
        svn_url: 'https://github.com/DannielNavas/marisolenlaweb',
        homepage: null,
        size: 640,
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
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 281251022,
        node_id: 'MDEwOlJlcG9zaXRvcnkyODEyNTEwMjI=',
        name: 'podcasttrek',
        full_name: 'DannielNavas/podcasttrek',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/podcasttrek',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/DannielNavas/podcasttrek',
        forks_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/teams',
        hooks_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/branches{/branch}',
        tags_url: 'https://api.github.com/repos/DannielNavas/podcasttrek/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/podcasttrek/deployments',
        created_at: '2020-07-20T23:56:54Z',
        updated_at: '2020-12-08T02:44:16Z',
        pushed_at: '2021-05-27T01:25:53Z',
        git_url: 'git://github.com/DannielNavas/podcasttrek.git',
        ssh_url: 'git@github.com:DannielNavas/podcasttrek.git',
        clone_url: 'https://github.com/DannielNavas/podcasttrek.git',
        svn_url: 'https://github.com/DannielNavas/podcasttrek',
        homepage: null,
        size: 618909,
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
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 316106519,
        node_id: 'MDEwOlJlcG9zaXRvcnkzMTYxMDY1MTk=',
        name: 'pwademo',
        full_name: 'DannielNavas/pwademo',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/pwademo',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/DannielNavas/pwademo',
        forks_url: 'https://api.github.com/repos/DannielNavas/pwademo/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/pwademo/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/pwademo/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/DannielNavas/pwademo/teams',
        hooks_url: 'https://api.github.com/repos/DannielNavas/pwademo/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/pwademo/issues/events{/number}',
        events_url: 'https://api.github.com/repos/DannielNavas/pwademo/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/pwademo/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/pwademo/branches{/branch}',
        tags_url: 'https://api.github.com/repos/DannielNavas/pwademo/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/pwademo/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/pwademo/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/pwademo/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/pwademo/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/pwademo/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/pwademo/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/pwademo/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/pwademo/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/pwademo/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/pwademo/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/pwademo/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/pwademo/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/pwademo/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/pwademo/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/pwademo/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/pwademo/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/DannielNavas/pwademo/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/pwademo/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/pwademo/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/pwademo/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/pwademo/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/pwademo/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/pwademo/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/pwademo/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/pwademo/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/pwademo/deployments',
        created_at: '2020-11-26T02:48:18Z',
        updated_at: '2020-11-27T03:04:39Z',
        pushed_at: '2020-11-27T03:04:37Z',
        git_url: 'git://github.com/DannielNavas/pwademo.git',
        ssh_url: 'git@github.com:DannielNavas/pwademo.git',
        clone_url: 'https://github.com/DannielNavas/pwademo.git',
        svn_url: 'https://github.com/DannielNavas/pwademo',
        homepage: null,
        size: 197,
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
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 24968615,
        node_id: 'MDEwOlJlcG9zaXRvcnkyNDk2ODYxNQ==',
        name: 'Reportes',
        full_name: 'DannielNavas/Reportes',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/Reportes',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/DannielNavas/Reportes',
        forks_url: 'https://api.github.com/repos/DannielNavas/Reportes/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/Reportes/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/Reportes/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/DannielNavas/Reportes/teams',
        hooks_url: 'https://api.github.com/repos/DannielNavas/Reportes/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/Reportes/issues/events{/number}',
        events_url: 'https://api.github.com/repos/DannielNavas/Reportes/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/Reportes/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/Reportes/branches{/branch}',
        tags_url: 'https://api.github.com/repos/DannielNavas/Reportes/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/Reportes/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/Reportes/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/Reportes/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/Reportes/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/Reportes/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/Reportes/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/Reportes/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/Reportes/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/Reportes/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/Reportes/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/Reportes/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/Reportes/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/Reportes/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/Reportes/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/Reportes/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/Reportes/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/DannielNavas/Reportes/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/Reportes/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/Reportes/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/Reportes/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/Reportes/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/Reportes/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/Reportes/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/Reportes/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/Reportes/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/Reportes/deployments',
        created_at: '2014-10-09T01:34:22Z',
        updated_at: '2014-10-09T01:49:08Z',
        pushed_at: '2017-07-06T21:40:23Z',
        git_url: 'git://github.com/DannielNavas/Reportes.git',
        ssh_url: 'git@github.com:DannielNavas/Reportes.git',
        clone_url: 'https://github.com/DannielNavas/Reportes.git',
        svn_url: 'https://github.com/DannielNavas/Reportes',
        homepage: null,
        size: 55554,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'Java',
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
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 262695806,
        node_id: 'MDEwOlJlcG9zaXRvcnkyNjI2OTU4MDY=',
        name: 'startrek',
        full_name: 'DannielNavas/startrek',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/startrek',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/DannielNavas/startrek',
        forks_url: 'https://api.github.com/repos/DannielNavas/startrek/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/startrek/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/startrek/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/DannielNavas/startrek/teams',
        hooks_url: 'https://api.github.com/repos/DannielNavas/startrek/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/startrek/issues/events{/number}',
        events_url: 'https://api.github.com/repos/DannielNavas/startrek/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/startrek/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/startrek/branches{/branch}',
        tags_url: 'https://api.github.com/repos/DannielNavas/startrek/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/startrek/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/startrek/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/startrek/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/startrek/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/startrek/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/startrek/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/startrek/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/startrek/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/startrek/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/startrek/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/startrek/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/startrek/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/startrek/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/startrek/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/startrek/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/startrek/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/DannielNavas/startrek/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/startrek/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/startrek/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/startrek/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/startrek/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/startrek/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/startrek/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/startrek/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/startrek/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/startrek/deployments',
        created_at: '2020-05-10T02:16:32Z',
        updated_at: '2020-05-18T14:44:29Z',
        pushed_at: '2020-05-18T14:44:34Z',
        git_url: 'git://github.com/DannielNavas/startrek.git',
        ssh_url: 'git@github.com:DannielNavas/startrek.git',
        clone_url: 'https://github.com/DannielNavas/startrek.git',
        svn_url: 'https://github.com/DannielNavas/startrek',
        homepage: null,
        size: 64243,
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
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 281247619,
        node_id: 'MDEwOlJlcG9zaXRvcnkyODEyNDc2MTk=',
        name: 'StarTrekPodcast',
        full_name: 'DannielNavas/StarTrekPodcast',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/StarTrekPodcast',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/DannielNavas/StarTrekPodcast',
        forks_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/teams',
        hooks_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/StarTrekPodcast/deployments',
        created_at: '2020-07-20T23:32:42Z',
        updated_at: '2020-07-20T23:32:47Z',
        pushed_at: '2020-07-21T01:15:14Z',
        git_url: 'git://github.com/DannielNavas/StarTrekPodcast.git',
        ssh_url: 'git@github.com:DannielNavas/StarTrekPodcast.git',
        clone_url: 'https://github.com/DannielNavas/StarTrekPodcast.git',
        svn_url: 'https://github.com/DannielNavas/StarTrekPodcast',
        homepage: null,
        size: 13961,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
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
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 33222433,
        node_id: 'MDEwOlJlcG9zaXRvcnkzMzIyMjQzMw==',
        name: 'TextoAudio',
        full_name: 'DannielNavas/TextoAudio',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/TextoAudio',
        description:
          'proyecto que pasa de texto a audio. Escrito en HTML CSS JS y JAVA',
        fork: false,
        url: 'https://api.github.com/repos/DannielNavas/TextoAudio',
        forks_url: 'https://api.github.com/repos/DannielNavas/TextoAudio/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/DannielNavas/TextoAudio/teams',
        hooks_url: 'https://api.github.com/repos/DannielNavas/TextoAudio/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/branches{/branch}',
        tags_url: 'https://api.github.com/repos/DannielNavas/TextoAudio/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/TextoAudio/deployments',
        created_at: '2015-04-01T02:36:08Z',
        updated_at: '2015-04-01T02:41:43Z',
        pushed_at: '2020-06-08T19:00:58Z',
        git_url: 'git://github.com/DannielNavas/TextoAudio.git',
        ssh_url: 'git@github.com:DannielNavas/TextoAudio.git',
        clone_url: 'https://github.com/DannielNavas/TextoAudio.git',
        svn_url: 'https://github.com/DannielNavas/TextoAudio',
        homepage: null,
        size: 14680,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 1,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1,
        license: {
          key: 'gpl-2.0',
          name: 'GNU General Public License v2.0',
          spdx_id: 'GPL-2.0',
          url: 'https://api.github.com/licenses/gpl-2.0',
          node_id: 'MDc6TGljZW5zZTg=',
        },
        forks: 1,
        open_issues: 1,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 144227850,
        node_id: 'MDEwOlJlcG9zaXRvcnkxNDQyMjc4NTA=',
        name: 'thor',
        full_name: 'DannielNavas/thor',
        private: false,
        owner: {
          login: 'DannielNavas',
          id: 7865626,
          node_id: 'MDQ6VXNlcjc4NjU2MjY=',
          avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DannielNavas',
          html_url: 'https://github.com/DannielNavas',
          followers_url: 'https://api.github.com/users/DannielNavas/followers',
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
        html_url: 'https://github.com/DannielNavas/thor',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/DannielNavas/thor',
        forks_url: 'https://api.github.com/repos/DannielNavas/thor/forks',
        keys_url:
          'https://api.github.com/repos/DannielNavas/thor/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/DannielNavas/thor/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/DannielNavas/thor/teams',
        hooks_url: 'https://api.github.com/repos/DannielNavas/thor/hooks',
        issue_events_url:
          'https://api.github.com/repos/DannielNavas/thor/issues/events{/number}',
        events_url: 'https://api.github.com/repos/DannielNavas/thor/events',
        assignees_url:
          'https://api.github.com/repos/DannielNavas/thor/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/DannielNavas/thor/branches{/branch}',
        tags_url: 'https://api.github.com/repos/DannielNavas/thor/tags',
        blobs_url:
          'https://api.github.com/repos/DannielNavas/thor/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/DannielNavas/thor/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/DannielNavas/thor/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/DannielNavas/thor/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/DannielNavas/thor/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/DannielNavas/thor/languages',
        stargazers_url:
          'https://api.github.com/repos/DannielNavas/thor/stargazers',
        contributors_url:
          'https://api.github.com/repos/DannielNavas/thor/contributors',
        subscribers_url:
          'https://api.github.com/repos/DannielNavas/thor/subscribers',
        subscription_url:
          'https://api.github.com/repos/DannielNavas/thor/subscription',
        commits_url:
          'https://api.github.com/repos/DannielNavas/thor/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/DannielNavas/thor/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/DannielNavas/thor/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/DannielNavas/thor/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/DannielNavas/thor/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/DannielNavas/thor/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/DannielNavas/thor/merges',
        archive_url:
          'https://api.github.com/repos/DannielNavas/thor/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/DannielNavas/thor/downloads',
        issues_url:
          'https://api.github.com/repos/DannielNavas/thor/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/DannielNavas/thor/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/DannielNavas/thor/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/DannielNavas/thor/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/DannielNavas/thor/labels{/name}',
        releases_url:
          'https://api.github.com/repos/DannielNavas/thor/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/DannielNavas/thor/deployments',
        created_at: '2018-08-10T02:42:22Z',
        updated_at: '2018-08-10T21:53:38Z',
        pushed_at: '2018-08-10T21:53:37Z',
        git_url: 'git://github.com/DannielNavas/thor.git',
        ssh_url: 'git@github.com:DannielNavas/thor.git',
        clone_url: 'https://github.com/DannielNavas/thor.git',
        svn_url: 'https://github.com/DannielNavas/thor',
        homepage: null,
        size: 116,
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
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
    ]);
  }
}
describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ProjectsComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, // Tells Angular we will have custom tags in our templates
      ],
      providers: [{ provide: GithubService, useClass: MockGithubService }],
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

  it('should error services', () => {
    const xServices = fixture.debugElement.injector.get(GithubService);
    const mockCall = spyOn(xServices, 'getRepos').and.returnValue(
      throwError({
        error: 'Status error',
      })
    );
    mockCall.and.returnValue(
      throwError({
        error: 'Status error',
      })
    );
    component.getInfoRepository();
    expect(component.message).toEqual({
      error: 'Status error',
    });
  });
});
