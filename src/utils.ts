import Cookies from 'js-cookie';
import debounce from 'lodash/debounce';
import mdc from 'markdown-core/src/index-browser';
import store from './store';

export const getPreviewWidth = () => {
  let previewWidth = Cookies.get('editor-versus-preview');
  if (previewWidth === undefined) {
    previewWidth = '50%';
  }
  return previewWidth;
};

// neither editor or preview is hidden
export const getNormalPreviewWidth = () => {
  let previewWidth = getPreviewWidth();
  if (previewWidth === '1' || previewWidth === '100%') {
    previewWidth = '50%';
  }
  return previewWidth;
};

// user changes markdown text
export const lazyChange = debounce(
  () => {
    if (store.layout.panes.east.outerWidth() < 8) {
      // preview is hidden
      return; // no need to update preview if it's hidden
    }
    mdc.init(store.editor.getValue()); // realtime preview
  },
  1024,
  { leading: false, trailing: true },
);

// adjust layout according to percentage configuration
export const lazyResize = debounce(
  () => {
    store.layout.sizePane('east', getPreviewWidth());
  },
  1024,
  { leading: false, trailing: true },
);

export const themes = [
  '3024-day',
  '3024-night',
  'abcdef',
  'ambiance-mobile',
  'ambiance',
  'base16-dark',
  'base16-light',
  'bespin',
  'blackboard',
  'cobalt',
  'colorforth',
  'dracula',
  'duotone-dark',
  'duotone-light',
  'eclipse',
  'elegant',
  'erlang-dark',
  'hopscotch',
  'icecoder',
  'isotope',
  'lesser-dark',
  'liquibyte',
  'material',
  'mbo',
  'mdn-like',
  'midnight',
  'monokai',
  'neat',
  'neo',
  'night',
  'panda-syntax',
  'paraiso-dark',
  'paraiso-light',
  'pastel-on-dark',
  'railscasts',
  'rubyblue',
  'seti',
  'solarized',
  'the-matrix',
  'tomorrow-night-bright',
  'tomorrow-night-eighties',
  'ttcn',
  'twilight',
  'vibrant-ink',
  'xq-dark',
  'xq-light',
  'yeti',
  'zenburn',
];

export const loadScript = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => {
      resolve();
    };
    script.onerror = () => {
      reject();
    };
    document.head.appendChild(script);
  });
};