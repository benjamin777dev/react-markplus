import $ from 'jquery';
import debounce from 'lodash/debounce';
import mdc from 'markdown-core/src/index-browser';

import { syncEditor } from './sync_scroll';
import { registerToolBarEvents } from './toolbar';
import store from './store';

export const init = () => {
  // setup toolbar
  registerToolBarEvents();

  // apply themes
  store.preferences.customCssFiles.split('\n').forEach((cssfile) => {
    cssfile = cssfile.trim();
    if (cssfile.length > 0) {
      $('head').append('<link rel="stylesheet" href="' + cssfile + '"/>');
    }
  });

  // apply plugins
  store.preferences.customJsFiles.split('\n').forEach((jsFile) => {
    jsFile = jsFile.trim();
    if (jsFile.length > 0) {
      $('head').append('<script src="' + jsFile + '"></script>');
    }
  });

  // scroll past end
  $('article#preview').css(
    'padding-bottom',
    $('#left-panel').height() -
      parseInt($('article#preview').css('line-height'), 10) +
      'px',
  );

  // left scroll with right
  $('#right-panel').scroll(() => {
    syncEditor();
  });

  // whenever user changes markdown...
  const lazyChange = debounce(
    () => {
      mdc.init(store.editor.getValue()); // realtime preview
    },
    1024,
    { leading: false, trailing: true },
  );
  store.editor.on('changes', () => {
    lazyChange();
  });
};
