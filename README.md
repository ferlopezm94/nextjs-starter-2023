# Next.js starter 2023

A Next.js starter (v13) that includes support for:

- [typescript](https://www.typescriptlang.org): a typed superset of JavaScript that compiles to plain JavaScript.
- [tailwindcss](https://tailwindcss.com): a utility-first, highly customizable CSS framework for rapidly building custom designs.
- [eslint](https://github.com/eslint/eslint): statically analyzes your code to quickly find problems.
- [prettier](https://github.com/prettier/prettier): an opinionated code formatter that enforces a consistent style by parsing your code.

## Getting started

### Requirements

Make sure the following tools are installed in your system:

- [Node v16.X.X](https://nodejs.org/en/download/)
- [Yarn v1.22.X](https://yarnpkg.com/en/docs/install)

### Installation

Clone the GitHub repository and use `yarn` to install the dependencies:

```
$ git clone https://github.com/ferlopezm94/nextjs-starter-2023.git project-name
$ cd project-name
$ yarn install
```

## Development

### Local

To start developing simply run:

```
$ yarn dev
```

Next.js will compile and start your program in development mode. You can start making some changes and each one will trigger a restart to your program.

Finally, remove all things related to this repo:

- Remove the git repo with `rm -rf .git`
- Update README.md accordingly (e.g. project name, repo url)
- Update project info in `package.json` (name, set version to 0.0.0, change description)
- Empty `index.tsx` file
- Init git repo and create first commit

### Build

To create a production build simply run:

```
$ yarn build
```

Next.js will build the application for production usage.

To run the production build locally run:

```
$ yarn start
```

Next.js will start a production server.

## Contributions

Currently, no contributions are been accepted.
