import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {IntlProvider} from 'react-intl';
import {addLocaleData} from 'react-intl';
import locale_en from 'react-intl/locale-data/en';

import locale_es from 'react-intl/locale-data/es';
import messages_es from './translations/es.json';
import messages_en from './translations/en.json';

addLocaleData([...locale_en, ...locale_es]);

// Your top level component
import App from './App';

// Export your top level component as JSX (for static rendering)
export default App;

const messages = {
  es: messages_es,
  en: messages_en,
};
const language = 'es';

console.log(messages_es);

// Render your app
if (typeof document !== 'undefined') {
  const render = Comp => {
    ReactDOM.hydrate(
      <IntlProvider locale={language} messages={messages[language]}>
        <AppContainer>
          <Comp />
        </AppContainer>
      </IntlProvider>,
      document.getElementById('root')
    );
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./App', () => {
      render(require('./App').default);
    });
  }
}
