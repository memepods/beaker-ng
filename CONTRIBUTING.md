# Contribute

## Introduction

Thanks for considering contributing to Beaker!

We welcome any type of contribution, not only code. You can help with
- **QA**: file bug reports, the more details you can give the better (e.g. screenshots with the console open)
- **Community**: presenting the project at meetups, organizing a dedicated meetup for the local community, ...
- **Code**: take a look at the [open issues](https://github.com/beakerbrowser/beaker/issues). Even if you can't write code, commenting on them, showing that you care about a given issue matters. It helps us triage them.
- **Money**: we welcome financial contributions in full transparency on our [open collective](https://opencollective.com/beaker).

Looking to work on Beaker? [Watch this video](https://www.youtube.com/watch?v=YuE9OO-ZDYo) and take a look at [the build notes](./build-notes.md).

### Building from Source

Requires node 12, 14, or 16.

On Linux (and in some cases macOS) you need libtool, m4, autoconf, and automake:

```bash
sudo apt-get install libtool m4 make g++ autoconf # debian/ubuntu
sudo dnf install libtool m4 make gcc-c++ libXScrnSaver  # fedora
brew install libtool autoconf automake # macos
```

On Windows, you'll need to install [Python 3.9](https://www.python.org/downloads/release/python-2913/), Visual Studio 2015 or 2017, and [Git](https://git-scm.com/download/win). (You might try [windows-build-tools](https://www.npmjs.com/package/windows-build-tools) in place of MSVS.) Then run:

```powershell
npm config set python C:\absolute\path\to\python.exe
npm config set msvs_version 2017
npm install -g gulp
```

To Build:

```bash
git clone https://github.com/Alex313031/beaker-ng.git
cd beaker/scripts
npm install # don't worry about v8 api errors building native modules - rebuild will fix
npm run rebuild # needed after each install for sqlite3. See https://github.com/electron/electron/issues/5851
npm start # for generating installation packages, see below
```

To Clean

```bash
npm run clean # cleans node_modules
npm run distclean # cleans 'dist' dir
```

To Build Installers

```bash
npm run dist # compiles beaker and places it in 'dist/platform-unpacked', where platform is i.e. linux, win, mac
npm run distclean # cleans 'dist'
npm run dist-linux # to make .deb, .appimage, and .zip
npm run dist-win # to make .exe and .zip
npm run dist-mac # to make .dmg and .app
```

If you pull latest from the repo and get weird module errors, do:

```bash
npm run burnthemall
```

This invokes [the mad king](http://nerdist.com/wp-content/uploads/2016/05/the-mad-king-game-of-thrones.jpg), who will torch your `node_modules/`, and do the full install/rebuild process for you.
`npm start` should work afterwards.

If you're doing development, `npm run watch` to have assets build automatically.

### Debugging

To debug the background process start electron with the `--inspect` argument pointing to the `app` directory, e.g. `script/node_modules/.bin/electron --inspect app`.  You can then attach an external debugger (e.g. Chrome devtools).

To debug the shell window itself (i.e. the beaker browser chrome), press `CmdOrCtrl+alt+shift+I` to open the devtools.

To debug a built-in pages (e.g. the Settings or Library pages), press `CmdOrCtrl+shift+I` to open the devtools.

## Submitting code

Any code change should be submitted as a pull request. The description should explain what the code does and give steps to execute it. The pull request should also contain tests, if applicable. For example, a PR that changes a part of the Beaker UI will likely not need tests, but a PR that updates Beaker's networking stack would.

## Code review process

The bigger the pull request, the longer it will take to review and merge. Try to break down large pull requests in smaller chunks that are easier to review and merge.

It is also always helpful to have some context for your pull request. What was the purpose? Why does it matter to you?

## Financial contributions

We also welcome financial contributions in full transparency on our [open collective](https://opencollective.com/beaker).
Anyone can file an expense. If the expense makes sense for the development of the community, it will be "merged" in the ledger of our open collective by the core contributors and the person who filed the expense will be reimbursed.

## Questions

If you have any questions, create an [issue](https://github.com/Alex313031/beaker-ng/issues) (protip: do a quick search first to see if someone else didn't ask the same question before!).

~~You can also reach us at [@BeakerBrowser](https://twitter.com/beakerbrowser) on Twitter, in #beakerbrowser on freenode, or hello@beaker.opencollective.com.~~

You can reach me at Alex313031@gmail.com

## Credits

### Contributors

Thank you to all the people who have already contributed to beaker!
<a href="/beakerbrowser/beaker/graphs/contributors"><img src="https://opencollective.com/beaker/contributors.svg?width=890" />


### Backers

Thank you to all our backers! [[Become a backer](https://opencollective.com/beaker#backer)]

<a href="https://opencollective.com/beaker#backers" target="_blank"><img src="https://opencollective.com/beaker/backers.svg?width=890"></a>


### Sponsors

Thank you to all our sponsors! (please ask your company to also support this open source project by [becoming a sponsor](https://opencollective.com/beaker#sponsor))

<a href="https://opencollective.com/beaker/sponsor/0/website" target="_blank"><img src="https://opencollective.com/beaker/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/beaker/sponsor/1/website" target="_blank"><img src="https://opencollective.com/beaker/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/beaker/sponsor/2/website" target="_blank"><img src="https://opencollective.com/beaker/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/beaker/sponsor/3/website" target="_blank"><img src="https://opencollective.com/beaker/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/beaker/sponsor/4/website" target="_blank"><img src="https://opencollective.com/beaker/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/beaker/sponsor/5/website" target="_blank"><img src="https://opencollective.com/beaker/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/beaker/sponsor/6/website" target="_blank"><img src="https://opencollective.com/beaker/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/beaker/sponsor/7/website" target="_blank"><img src="https://opencollective.com/beaker/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/beaker/sponsor/8/website" target="_blank"><img src="https://opencollective.com/beaker/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/beaker/sponsor/9/website" target="_blank"><img src="https://opencollective.com/beaker/sponsor/9/avatar.svg"></a>

<!-- This `CONTRIBUTING.md` is based on @nayafia's template https://github.com/nayafia/contributing-template -->
