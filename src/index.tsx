import React, { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import MarkdownPlus from './library';
import markdownUrl from './sample.md';

const Root = () => {
  const [data, setData] = React.useState('');
  useEffect(() => {
    const loadSampleData = async () => {
      const r = await fetch(markdownUrl);
      const text = await r.text();
      setData(text);
    };
    loadSampleData();
  }, []);

  // for printing
  useEffect(() => {
    let paddingBottom = '0';
    const beforePrintHandler = () => {
      document.body.appendChild(document.getElementById('preview'));
      document.getElementById('root').style.display = 'none';
      paddingBottom = document.getElementById('preview').style.paddingBottom;
      document.getElementById('preview').style.paddingBottom = '0'; // disable scroll past end
    };
    window.addEventListener('beforeprint', beforePrintHandler);
    const afterPrintHandler = () => {
      document.getElementById('root').style.display = 'block';
      document
        .getElementById('right-panel')
        .appendChild(document.getElementById('preview'));
      document.getElementById('preview').style.paddingBottom = paddingBottom;
    };
    window.addEventListener('afterprint', afterPrintHandler);
    return () => {
      window.removeEventListener('beforeprint', beforePrintHandler);
      window.removeEventListener('afterprint', afterPrintHandler);
    };
  }, []);
  return <MarkdownPlus data={data} />;
};

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
