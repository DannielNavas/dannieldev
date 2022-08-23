import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      imports: [SharedModule],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    component.project = {
      id: 0,
      node_id: '',
      name: '',
      full_name: '',
      private: false,
      owner: {
        login: '',
        id: 0,
        node_id: '',
        avatar_url: '',
        gravatar_id: '',
        url: '',
        html_url: '',
        followers_url: '',
        following_url: '',
        gists_url: '',
        starred_url: '',
        subscriptions_url: '',
        organizations_url: '',
        repos_url: '',
        events_url: '',
        received_events_url: '',
        type: '',
        site_admin: false,
      },
      html_url: '',
      fork: false,
      url: '',
      forks_url: '',
      keys_url: '',
      collaborators_url: '',
      teams_url: '',
      hooks_url: '',
      issue_events_url: '',
      events_url: '',
      assignees_url: '',
      branches_url: '',
      tags_url: '',
      blobs_url: '',
      git_tags_url: '',
      git_refs_url: '',
      trees_url: '',
      statuses_url: '',
      languages_url: '',
      stargazers_url: '',
      contributors_url: '',
      subscribers_url: '',
      subscription_url: '',
      commits_url: '',
      git_commits_url: '',
      comments_url: '',
      issue_comment_url: '',
      contents_url: '',
      compare_url: '',
      merges_url: '',
      archive_url: '',
      downloads_url: '',
      issues_url: '',
      pulls_url: '',
      milestones_url: '',
      notifications_url: '',
      labels_url: '',
      releases_url: '',
      deployments_url: '',
      created_at: '',
      updated_at: '',
      pushed_at: '',
      git_url: '',
      ssh_url: '',
      clone_url: '',
      svn_url: '',
      size: 0,
      stargazers_count: 0,
      watchers_count: 0,
      has_issues: false,
      has_projects: false,
      has_downloads: false,
      has_wiki: false,
      has_pages: false,
      forks_count: 0,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      allow_forking: false,
      is_template: false,
      topics: [],
      visibility: '',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: '',
    };
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
