import TitleSection from '../../shared/TitleSection';
import WrapperContainer from '../../shared/WrapperContainer';
import CardInfo from './CardInfo';
import MapNearMe from './MapNearMe';

const NearMe = () => {
  return (
    <WrapperContainer>
      <>
        <div className="h-[1px]"></div>
        <TitleSection id="NearMe" title="VALEGGIO SUL MINCIO E DINTORNI" />
        <MapNearMe />
        {/* <TitleSection id="NearMe" title="PUNTI DI INTERESSE" /> */}
        <div className="flex justify-center gap-2 max-sm:gap-y-2 flex-wrap">
          <CardInfo
            id="Verona"
            title={
              <div className="flex flex-col items-start">
                <p>Verona</p>
                <p className="text-xs">“La città degli innamorati”</p>
              </div>
            }
            imgUrl="https://media.istockphoto.com/id/610871156/photo/bridge-ponte-pietra-in-verona-on-adige-river.jpg?b=1&s=170667a&w=0&k=20&c=x9yyonK-QnDtTH52-3HTG9PNeiaWwcx8ZjThSJ7ux5k="
          />
          <CardInfo
            id="Valeggio"
            title={
              <div className="flex flex-col items-start">
                <p> Valeggio sul Mincio e dintorni</p>
                <a
                  href="https://www.valeggio.com/da-vedere/"
                  target="_blank"
                  className="cursor-pointer underline text-xs"
                >
                  Cosa vedere
                </a>
              </div>
            }
            imgUrl="https://www.valeggio.com/wp-content/uploads/2021/03/borghetto-hd.jpg"
          />
          <CardInfo
            id="Peschiera"
            title={
              <div className="flex flex-col items-start">
                <p>Peschiera del Garda</p>
                <p className="text-xs">
                  Peschiera del Garda, Sirmione, Lazise, Bardolino
                </p>
              </div>
            }
            imgUrl="https://www.dreamtrip.it/wp-content/uploads/2022/04/peschiera-del-garda.jpg"
          />
          <CardInfo
            id="Mantova"
            title={
              <div className="flex flex-col items-start">
                <p>Mantova</p>
                <p className="text-xs">“La città dei Gonzaga”</p>
              </div>
            }
            imgUrl="https://www.mitiemisteri.it/wp-content/uploads/2020/06/Mantova.jpg"
          />
        </div>
      </>
    </WrapperContainer>
  );
};

export default NearMe;
