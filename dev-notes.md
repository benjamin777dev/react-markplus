- No [abbreviation](https://michelf.ca/projects/php-markdown/extra/#abbr) support, because prettier will replace "\*" with "\_" which will break abbreviation.

## Todo

- Write Playwright tests
- Replace mermaid with lightweight alternatives
- Make an app for ebook authoring
- Create a VS Code extension
- Release a React library so that everyone can use it easily
  - a few lines of code to embed mdp to their own app
- Close most GitHub issues
- bug: all components share the same store object
- bug: all components have the same className

## Pending

- fix a parcel sass build warning:
  - pending here: https://github.com/parcel-bundler/parcel/issues/9857

## Notes

- We use scoped CSS modules so that we could have multiple editors on the same page without confliction.

# ## useMemo vs useRef

You cannot read/write useRef object during rendering. So do not useRef and pass it to children components. Since you will be reading it for rendering.

useMemo doesn't have this restriction.
