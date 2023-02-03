import TitleSection from '../../shared/TitleSection';
import WrapperContainer from '../../shared/WrapperContainer';
import CardInfo from './CardInfo';
import MapNearMe from './MapNearMe';

const NearMe = () => {
  return (
    <WrapperContainer>
      <>
        <div className="h-[1px]"></div>
        <TitleSection id="NearMe" title="VICINO A ME" />
        <MapNearMe />
        <TitleSection id="NearMe" title="PUNTI DI INTERESSE VICINI" />
        <div className="flex justify-center gap-2 max-sm:gap-y-2 flex-wrap">
          <CardInfo
            id="Verona"
            title="Verona"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione
          porro consectetur quasi nesciunt, quas vitae laborum dolore excepturi
          voluptates, error at sint quidem minus. Impedit soluta ratione
          doloremque tempora."
            imgUrl="https://media.istockphoto.com/id/610871156/photo/bridge-ponte-pietra-in-verona-on-adige-river.jpg?b=1&s=170667a&w=0&k=20&c=x9yyonK-QnDtTH52-3HTG9PNeiaWwcx8ZjThSJ7ux5k="
          />
          <CardInfo
            id="Borghetto"
            title="Borghetto"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione
          porro consectetur quasi nesciunt, quas vitae laborum dolore excepturi
          voluptates, error at sint quidem minus. Impedit soluta ratione
          doloremque tempora."
            imgUrl="https://www.valeggio.com/wp-content/uploads/2021/03/borghetto-hd.jpg"
          />
          <CardInfo
            id="Peschiera"
            title="Peschiera del Garda"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione
          porro consectetur quasi nesciunt, quas vitae laborum dolore excepturi
          voluptates, error at sint quidem minus. Impedit soluta ratione
          doloremque tempora."
            imgUrl="https://www.dreamtrip.it/wp-content/uploads/2022/04/peschiera-del-garda.jpg"
          />
        </div>
      </>
    </WrapperContainer>
  );
};

export default NearMe;
