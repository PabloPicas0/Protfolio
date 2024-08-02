class Generator {
  repoName: string;
  reposData: {
    slug: string;
    title: string;
    description: string;
    techs: string;
    date: string;
    repoUrl: string;
    homepageUrl: string;
    banner: string;
  }[];
  fs: any;
  path: any;
  YAML: any;
  ora: any;
  folderPaths: string[];
  imagesPaths: string[];

  constructor(repoName: string) {
    this.repoName = repoName;
    this.reposData = [];
    this.folderPaths = [];
    this.fs = require("fs/promises");
    this.path = require("path");
    this.YAML = require("json-to-pretty-yaml");
  }

  async getRepoDetails() {
    const repos = await fetch(`https://api.github.com/users/${this.repoName}/repos`);
    const nodes = await repos.json();

    this.reposData = nodes.map((node) => {
      const { created_at, description, html_url, homepage, name, topics } = node;
      const title = name.split("-").join(" ");

      return {
        slug: name.toLowerCase(),
        title,
        description,
        techs: topics,
        date: created_at,
        repoUrl: html_url,
        homepageUrl: homepage,
        banner: "./images/banner.jpg",
      };
    });

    this.folderPaths = this.reposData.map((repo) => {
      return this.path.join(__dirname, "../", "projects", repo.slug);
    });

    console.log("Ready for folder generation");
  }

  async CreateFileStructure() {
    for (let i = 0; i < this.folderPaths.length; ++i) {
      // If needed uncomment this line to remove all created files
      // await this.fs.rmdir(this.folderPaths[i], { recursive: true, force: true });

      await this.fs.mkdir(this.folderPaths[i]);
      await this.fs.mkdir(this.folderPaths[i] + "\\images");
      await this.fs.writeFile(
        this.path.join(this.folderPaths[i], `\\${this.reposData[i].slug}.mdx`),
        "---\n" + this.YAML.stringify(this.reposData[i]) + "---"
      );
    }

    console.log("Folders generated at: ", this.folderPaths);
    console.log("---\n" + this.YAML.stringify(this.reposData[this.reposData.length - 1]) + "---");
  }
}

const generator = new Generator("PabloPicas0");

async function generate() {
  await generator.getRepoDetails();
  await generator.CreateFileStructure();
}

generate();
