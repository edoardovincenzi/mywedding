import { useTranslation } from 'react-i18next';
import TitleSection from '../../shared/TitleSection';
import WrapperContainer from '../../shared/WrapperContainer';

const About = () => {
  const { t } = useTranslation();
  return (
    <WrapperContainer>
      <>
        <div className="h-[1px]"></div>
        <TitleSection id="AboutUs" title={t('aboutUs.title')} />
        <p>{t('about.text')}</p>
        <img className="w-full h-[40vh]" src="/images/world.png"/>
        <p>{t("about.poem")}</p>
      </>
    </WrapperContainer>
  );
};

export default About;
