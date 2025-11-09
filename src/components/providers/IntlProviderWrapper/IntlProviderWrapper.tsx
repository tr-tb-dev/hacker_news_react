import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { selectLanguage } from '@/store/reducers/settings/settings-selectors';
import translationsEn from '@/translations/translations-en.json';
import translationsHu from '@/translations/translations-hu.json';
import { Language } from '@/enums/settings';
import { ReactNode } from 'react';

const messages: Record<Language, Record<string, string>> = {
  [Language.English]: translationsEn,
  [Language.Hungarian]: translationsHu,
};

interface IntlProviderWrapperProps {
  children: ReactNode;
}

function IntlProviderWrapper({ children }: IntlProviderWrapperProps) {
  const language = useSelector(selectLanguage);

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      {children}
    </IntlProvider>
  );
}

export default IntlProviderWrapper;
