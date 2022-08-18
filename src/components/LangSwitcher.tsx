import type { NextPage } from 'next';
import { useTranslation, LanguageSwitcher } from 'next-export-i18n';

export const LangSwitcher: NextPage = () => {
  const { t } = useTranslation();

  return (
    <nav>
      {t('ui.languageSwitcher')}
      <br />
      <LanguageSwitcher lang="ja">ja</LanguageSwitcher> |{' '}
      <LanguageSwitcher lang="en">en</LanguageSwitcher>
    </nav>
  );
};
