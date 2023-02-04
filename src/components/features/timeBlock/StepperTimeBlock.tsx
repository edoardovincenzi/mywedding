import { BiChurch } from 'react-icons/bi';
import { MdOutlineFoodBank } from 'react-icons/md';
import { GiPartyPopper } from 'react-icons/gi';
import Step from './Step';

const StepperTimeBlock = () => {
  return (
    <ol className="relative text-gray-500 border-l border-gray-200 m-11">
      <Step
        title="Cerimonia"
        when="12:30 - 14:00"
        where="Castello di Valeggio"
        description="Cerimonia, i parcheggi sono li oppure dall'altra parte. Volendo c'è la possibilità di arrivare all'entrata del castello con la macchina e lasciare giù le persone e poi parcheggiare nei parcheggi prima citati."
        Icon={BiChurch}
      />

      <Step
        title="Cena"
        when="14:00 - 15:30"
        where="Villa corte Peron"
        description="Si arriva alla villa e si mangia come porsei, si beve moderatamente e si taglia la torta."
        Icon={MdOutlineFoodBank}
      />
      <Step
        title="Festa post cena"
        when="15:30 - 23:00"
        where="Villa corte Peron"
        description="La dignità ormai è partita, dunque non si beve più moderatamente."
        Icon={GiPartyPopper}
      />
    </ol>
  );
};

export default StepperTimeBlock;
