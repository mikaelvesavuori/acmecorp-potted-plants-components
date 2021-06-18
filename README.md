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
- `/src/components`: Manually assembled complex React components
- `/src/elements`: Figmagic-generated React components ("elements")
- `/src/graphics`: Figmagic-generated graphics
- `/src/tokens`: Figmagic-generated design tokens
