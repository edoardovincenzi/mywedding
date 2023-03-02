import { Trans, useTranslation } from 'react-i18next';
import TitleSection from '../../shared/TitleSection';
import WrapperContainer from '../../shared/WrapperContainer';

const WeddingList = () => {
  const { t } = useTranslation();
  return (
    <WrapperContainer classNameWrapper="max-w-[80%]">
      <>
        <div className="h-[1px]"></div>
        <TitleSection id="weddingList" title={t('weddingList.title')} />
        <p className="bg-white/90">
          <Trans i18nKey="weddingList.text" t={t} components={[<br></br>]} />
        </p>
        <img className="w-[80vw] object-contain my-3" src="/images/world.png" />
        <p className="bg-white/90 italic">
          <Trans
            i18nKey="weddingList.poem"
            t={t}
            components={[
              <br></br>,
              <span className="text-right block w-full"></span>,
            ]}
          />
        </p>
      </>
    </WrapperContainer>
  );
};

export default WeddingList;
