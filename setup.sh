#!/bin/sh

# Welcome
echo "Initializing a component library boilerplate for you using React, Webpack, Styled Components, Figmagic and Storybook. Hang tight!"

# Create readme
echo "# component-library-demo" >> README.md

# Initialize with npm
npm init -y

# Install dependencies
npm install react react-dom prop-types styled-components -S
npm install webpack webpack-cli webpack-dev-server @types/node @babel/preset-env @babel/preset-react @babel/core babel-loader ts-loader file-loader eslint prettier figmagic chromatic -D
npm install html-webpack-plugin@5 dotenv-webpack@7.0.2 -D # These fix problems related to Webpack 5 and Storybook 6

# Add Storybook
npx sb init --builder webpack5

# Create some basic folders and files
mkdir -p .github/workflows
touch .github/workflows/main.yml
mkdir -p src/components
touch src/index.jsx
touch .env
touch .gitignore

# Create basic gitignore
cat << EOT > .gitignore
*.lock
.env
.env.*
.figmagicrc
/.figmagic
dist/
node_modules/
.vscode/
EOT

# Create env file
cat << EOT > .env
FIGMA_URL=
FIGMA_TOKEN=
CHROMATIC_PROJECT_TOKEN=
EOT

# Create babel config
cat << EOT > babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react'
  ]
};
EOT

# Create prettier config
cat << EOT > .prettierrc
{
  "useTabs": false,
  "printWidth": 100,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "none"
};
EOT

# Create eslint config
cat << EOT > .eslintrc.js
{
  "env": {
    "node": true
  }
};
EOT

# Create webpack config
cat << EOT > webpack.config.js
const path = require('path');

const assetsDir = path.resolve(__dirname, 'src/assets/');
const srcDir = path.resolve(__dirname, 'src/');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',
  context: srcDir,
  entry: './index.jsx',
  output: {
    path: distDir,
    filename: 'index.js',
    publicPath: '/',
    library: {
      name: 'component-library',
      type: 'umd',
    },
  },
  externals: {
    react: "React",
    'react-dom': "ReactDOM",
    "styled-components": "styled-components",
    "prop-types": "prop-types"
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, './')
    ],
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.mjs',
      '.html',
      '.jpg',
      '.jpeg',
      '.svg',
      '.png',
      '.woff2',
      '.woff'
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve('./tsconfig.json')
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|jpeg|svg|png|woff2|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              emitFile: false
            }
          }
        ],
        include: assetsDir,
        exclude: /node_modules/
      },
    ]
  },
  plugins: []
};
EOT

# Create GitHub Actions workflow
cat << EOT > .github/workflows/main.yml
name: 'Chromatic'

on:
  push:
    branches:
      - main

jobs:
  # Read more at: https://www.chromatic.com/docs/github-actions
  chromatic-deployment:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - name: Install dependencies
        run: yarn
      - name: Publish to Chromatic
        uses: chromaui/action@v1
        with:
          token: \${{ secrets.GITHUB_TOKEN }}
          projectToken: \${{ secrets.CHROMATIC_PROJECT_TOKEN }}
EOT

# Initialize Figmagic config
node ./node_modules/figmagic/build/index.js init

# Use npm link so we can use the library locally
npm link

# Initialize git repo
git init
git branch -m main

# TODO: Remove and clean-up for generated Storybook files

# Prompt for manual steps
cat << EOF
Nice work!

You need to do two things on your own.

1. Update your scripts block (in package.json) to contain:

"scripts": {
  "clean": "rm -rf dist",
  "build": "npm run clean && npx webpack",
  "figmagic": "node ./node_modules/figmagic/build/index.js",
  "start": "start-storybook -p 6006",
  "build-storybook": "build-storybook",
  "chromatic": "npx chromatic --project-token {YOUR_TOKEN}"
}

2. Then add your Figmagic file ID/URL and Figma API token to the .env file that is generated for you.
For more information go to --> https://github.com/mikaelvesavuori/figmagic#running-figmagic

3. Lastly, add your Chromatic token to the .env file. You will see your Chromatic token when installing it,
otherwise you can always find it in the project settings inside Chromatic, behind the "Manage" tab.
EOF