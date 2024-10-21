import { Compartment } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { githubDark, githubLight } from '@uiw/codemirror-theme-github';
import { exclude, manage } from 'manate';

class Modal {
  public isOpen = false;
  public open() {
    this.isOpen = true;
  }
  public close() {
    this.isOpen = false;
    store.editor?.focus();
  }
}

class Preferences {
  public showToolbar = true;
  public editorVsPreview = '1fr 6px 1fr';
  public theme: 'light' | 'dark' | 'auto' = 'auto';
  public editorFontSize = 14;

  // neither editor or preview is hidden
  public get normalEvsP() {
    return this.editorVsPreview.startsWith('0fr ') ||
      this.editorVsPreview.endsWith(' 0fr')
      ? '1fr 6px 1fr'
      : this.editorVsPreview;
  }
}

export class Store {
  public editor: EditorView;
  public editorTheme = exclude(new Compartment());
  public editorFontSize = exclude(new Compartment());

  public modals = {
    about: new Modal(),
    help: new Modal(),
    preferences: new Modal(),
    emoji: new Modal(),
    fontAwesome: new Modal(),
  };

  public preferences = new Preferences();

  public applyTheme() {
    const darkTheme =
      this.preferences.theme === 'dark' ||
      (this.preferences.theme === 'auto' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    // editor theme
    this.editor.dispatch({
      effects: this.editorTheme.reconfigure(
        darkTheme ? githubDark : githubLight,
      ),
    });

    // preview theme
    if (darkTheme) {
      document
        .querySelectorAll('[data-theme="dark"]')
        .forEach((el) => el.removeAttribute('disabled'));
      document
        .querySelectorAll('[data-theme="light"]')
        .forEach((el) => el.setAttribute('disabled', 'true'));
    } else {
      document
        .querySelectorAll('[data-theme="light"]')
        .forEach((el) => el.removeAttribute('disabled'));
      document
        .querySelectorAll('[data-theme="dark"]')
        .forEach((el) => el.setAttribute('disabled', 'true'));
    }

    // toolbar theme
    if (darkTheme) {
      document.getElementById('toolbar').style.backgroundColor = '#0d1117';
      document.getElementById('toolbar').style.color = '#f0f6fc';
    } else {
      document.getElementById('toolbar').style.backgroundColor = 'white';
      document.getElementById('toolbar').style.color = '#666';
    }
  }
}

const store = manage(new Store());

export default store;
