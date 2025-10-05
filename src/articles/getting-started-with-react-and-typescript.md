How I Started Building Websites

A few years ago, building a website felt almost impossible to me. But after connecting some dots and learning from different tools and technologies—especially Git—everything slowly started to make sense.

The project that pushed me to finally build, manage, and maintain my own website actually came about unexpectedly. A few months ago, my fiancée and I got engaged 🎉. Among the many tasks involved in planning a wedding, one of them was creating our invitation and wedding website.

There are tons of tools and hosting platforms that make this easy. I explored a few:

Wix — something I had tried years ago for a travel blog. It was limited, painfully slow, and not as customizable as I wanted.

The Knot — another option, but with similar drawbacks.

Eventually, I asked myself:

“Why don’t you just build it and maintain it yourself?”

Sure, it would be harder, but also much more rewarding — even if the website was simple.

Starting the Research

I began researching how to build something straightforward using JavaScript templates. I even tried using AI to generate a basic starter project — not necessarily in JavaScript.

That’s when I found a tool called Lovable. Even on its free tier, it let me build a draft website that I could later fine-tune. Perfect.

Once I had the skeleton built with Node, Vite, and TypeScript, I connected it to my GitHub repository — and the workflow began to flow!

Don’t Be Scared of the Tech Stack

When I started, I had no clue what most of these terms meant. But here’s an easy way to think about them:

TypeScript → JavaScript with superpowers 💪

Node.js → JavaScript runtime for servers

Vite → A fast dev server for modern frontend development

Lovable was great for prototyping, but hosting through their paid plan wasn’t ideal for me. If you’re comfortable coding a bit, running a local dev server, and deploying your own site, you can do it yourself — cheaply and efficiently.

Setting Up Git

At this point, I had my website’s code on GitHub. The next step: version control.

For any project, using Git is essential — it’s not optional, especially if you ever plan to work with a team.

Luckily, I had some Git notes from a course I took months earlier. It was mostly theoretical, but it gave me a solid foundation. Still, I quickly learned that theory isn’t enough — you only truly understand Git when you use it.

Here’s what I did:

git clone your-repo.git

Then, I installed the basic dependencies for Node:

sudo apt update
sudo apt upgrade -y
sudo apt install npm -y
npm -v
sudo apt install nodejs -y
node -v

Once that’s done, it’s time to initialize Git inside the project folder:

git init

Then make your first commit:

git add .
git commit -m "my first commit"

This saves a version of your repository locally. If you ever mess something up, you can roll back to a previous version easily.

To view your commit history:

git log --oneline

Each commit has an ID — and if you ever need to restore one, just run:

git reset --hard <commit-id>

You can also tag important commits to keep track of milestones:

git tag -a <tag-name> <commit-hash> -m "Description or message"

Building and Running the Website

Now let’s shape the website!

First, install the dependencies:

npm i

Then start the development server:

npm run dev

This will spin up a local server so you can preview the site in real time.

One thing I love (and hate) is that if you make a syntax error, the site will crash — but the terminal will tell you exactly where the issue is, so you can fix it quickly.

Once your site looks the way you want, it’s time to build it for production and push it to GitHub Pages.
Deploying to GitHub Pages

Run the build command:

npm run build

This compiles your project into the /dist folder. Then move those files into a /docs folder for GitHub Pages:

cp dist/index.html dist/404.html
rm -rf docs
cp -r dist docs 
git add .
git commit -m "deploy"
git push

If your remote branch is ahead, but you’re sure your local changes are correct, you can force the push (carefully!):

git push --force

Now go to GitHub → Settings → Pages, and select the branch and folder (usually /docs).
Once saved, your website should be live — almost.
Setting the Base Path for GitHub Pages

If your site isn’t showing correctly, you’ll need to specify a base path in your vite.config.ts.
This is required because GitHub Pages serves sites under a subpath.

Example:
If your repository is username.github.io/foobar, edit your Vite config like this:

// https://vitejs.dev/config/
export default defineConfig({
  base: "/foobar/",
  server: {
    host: "::",
    port: 8080,
  },
});

If you’re using a custom domain, you can skip this step — just configure it in your GitHub Pages settings.
Final Thoughts

And that’s it! 🎉
The first version of my website was live — for free.

It felt exciting, motivating, and deeply rewarding. This small project became a gateway to learning, experimenting, and discovering how much fun web development can be.

Here’s to many more builds to come 🚀