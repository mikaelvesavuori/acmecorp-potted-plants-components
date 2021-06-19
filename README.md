# ACME Corp. Potted Plants - Component Library

React component library with components generated and/or composed with Figmagic. Made for [The newline Guide to React Component Design Systems with Figmagic](https://www.newline.co/courses/newline-guide-to-react-component-design-systems-with-figmagic/).

In the context of the course, it's meant to be used with our [example application](https://github.com/mikaelvesavuori/acmecorp-potted-plants-app).

## Technology

- [Figmagic](https://github.com/mikaelvesavuori/figmagic)
- React
- Styled Components
- Webpack
- ESLint
- Prettier
- Babel

## Instructions

- Install with `npm install --force`
- Run Storybook with `npm start`
- Create a `.env` file that contains values for `FIGMA_URL`, `FIGMA_TOKEN` and `CHROMATIC_TOKEN`

## Structure

- `/.storybook`: Storybook configuration
- `/src/index.jsx`: Component exports
- `/src/utils.js`: Basic JavaScript utility functions
- `/src/components`: Manually composed complex React components
- `/src/elements`: Figmagic-generated React components ("elements")
- `/src/graphics`: Figmagic-generated graphics
- `/src/tokens`: Figmagic-generated design tokens

## Building your own components

Starting with the course (or otherwise), you should move out the `src/components` folder to the root (or delete it) so you can see the more basic elements working on their own first.

Same goes for tokens, elements and graphics. A recommendation would be to keep all the pre-provided code in a folder in the root so you can eyeball it in case you wonder how something was originally built.

## Files that you will change after generating them

- **Button**: `src/elements/Button/Button.js`
- **Button**: `src/elements/Button/ButtonStyled.js`
- **Card**: `src/elements/Card/CardStyled.js`
- **Description**: `src/elements/Description/DescriptionStyled.js`
- **Heading**: `src/elements/Heading/HeadingStyled.js`
- **Image**: `src/elements/Image/Image.js`
- **Image**: `src/elements/Image/ImageStyled.js`

## Figmagic configuration

You need to set the `FIGMA_URL` and `FIGMA_TOKEN`, for example in an `.env` file.

The provided configuration at `figmagic.json` should be a good starting point.

_Remember to have your `overwrite` object correctly set up if you expect to modify the generated files! The provided config will overwrite anything except the React and Styled Components files._
