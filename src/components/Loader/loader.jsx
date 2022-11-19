import BeatLoader from 'react-spinners/BeatLoader';
import s from './loader.module.scss';

const Loader = () => {
  return (
    <div className={s.spinner}>
        <BeatLoader
            color="rgb(235, 235, 235)"
            size={25}
        />
    </div>
  );
};

export default Loader;