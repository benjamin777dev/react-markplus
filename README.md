# Markdown Plus

<img src="docs/icon.svg" alt="icon" width="256" height="256"/>

Markdown Plus ("M+" or "mdp" for short) is a markdown editor with extra features.

![Markdown Plus](screenshot.png)

## Online Demo

[Markdown Plus](https://chuntaoliu.com/markdown-plus/)

## Features

- GitHub flavored markdown
- Live preview with scroll sync
- Source code highlight
- Footnote
- Table of Contents
- Task list
- Abbreviation
- Custom container
- Definition list
- Emoji, Font Awesome icon
- Mathematical formula, AsciiMath
- Mermaid: Flowchart, Sequence diagram, Gantt diagram, Class diagram
- Vim mode, Emacs mode
- [Themes](https://github.com/tylingsoft/markdown-plus-themes)
- [Plugins](https://github.com/tylingsoft/markdown-plus-plugins)
- Chart.js: line, bar, radar, polar area, pie, doughnut and bubble

## Setup & Run

Optionally :star: this project, then:

```
fork it
git clone to your local
yarn install
yarn serve
open http://localhost:8080/ in your browser
```

## How to use Markdown Plus in your projects

Please take `src/index.html` as example.

## License

MIT

Copyright © 2015 - 2024 [Tyler Liu](https://github.com/tylerlong)

---

## Todo

- Get rid of jQuery
- bug: scroll by url hash, source code position is not accurate
  - issue disappeared after replacing babel with ts
- use TypeScript
- Replace jQeury Layout with split-grid
- Use parcel instead of webpack
