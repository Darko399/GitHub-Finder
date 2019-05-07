class Github {
  constructor() {
    this.client_id = '8096bd7ad31fdb5bf2e6';
    this.client_secret = '589e6619d68b5b102f040394be1138998db853b6';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const ProfileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    const RepoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await ProfileResponse.json();
    const repos = await RepoResponse.json();

    return {
      profile: profile,
      repos: repos
    };
  }
}
