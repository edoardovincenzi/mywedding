import { GiCastle } from 'react-icons/gi';
import { MdOutlineFoodBank } from 'react-icons/md';
import { GiPartyPopper } from 'react-icons/gi';
import Step from './Step';

const StepperTimeBlock = () => {
  return (
    <ol className="relative text-gray-500 border-l border-gray-200 m-11 bg-white/90 rounded-lg">
      <Step
        title="Cerimonia"
        when="16:00"
        where={
          <a
            className="cursor-pointer"
            href="https://goo.gl/maps/5EBJj5aKRVi9vN5F7"
            target="_blank"
          >
            Castello Scaligero di Valeggio sul Mincio (VR)
          </a>
        }
        description="Il castello si trova sulla sommità di una collina ed è raggiungibile a piedi tramite due sentieri lievemente in salita. Per l’evento sarà possibile accedere anche in auto ma non c’è nessun parcheggio a disposizione. I parcheggi più vicini si trovano in Piazza San Rocco, in fondo a Via Zamboni e nelle vie limitrofe. La cerimonia civile ha una durata di circa 40 minuti e avrà luogo nel suggestivo cortile interno del castello. In caso di maltempo riceverete aggiornamenti."
        Icon={GiCastle}
      />

      <Step
        title="Ricevimento"
        when="17:30/18:00"
        where={
          <a
            className="cursor-pointer"
            href="https://goo.gl/maps/ryMi8jHG5YK3KEzw5"
            target="_blank"
          >
            Villa Corte Peron
          </a>
        }
        description="Dopo la cerimonia si raggiunge la Villa, dove troverete un ampio parcheggio. Si inizierà con un ricco buffet di antipasti e seguirà la cena, che si terrà all’esterno se le temperature lo consentiranno. Seguiranno aggiornamenti."
        Icon={MdOutlineFoodBank}
      />
      <Step
        title="Festa"
        when="22:30/23:00"
        where={
          <a href="https://goo.gl/maps/ryMi8jHG5YK3KEzw5">Villa Corte Peron</a>
        }
        description="Dopo il taglio della torta è l’ora del party. Vi aspetterà Dj Ronky e open bar. "
        Icon={GiPartyPopper}
      />
    </ol>
  );
};

export default StepperTimeBlock;
