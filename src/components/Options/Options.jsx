import css from './Options.module.css';
import { Button } from '../Button/Button';
import currData  from '../../js/currdata';

const Options = ({ data, setData }) => {
  const { bad, good, neutral } = data;
  const totalFeedback = good + neutral + bad;

  const onUpdate = option => {
    setData({
      ...data,
      [option]: data[option] + 1,
    });
  };

  const updateReset = () => {
    setData(currData);
  };

  return (
    <ul className={css.list}>
      <li className={css.item} key="good">
        <Button onClick={() => onUpdate('good')}>
          Good
        </Button>
      </li>
      <li className={css.item} key="neutral">
        <Button onClick={() => onUpdate('neutral')}>
          Neutral
        </Button>
      </li>
      <li className={css.item} key="bad">
        <Button onClick={() => onUpdate('bad')}>
          Bad
        </Button>
      </li>
      {Boolean(totalFeedback) && (
        <li className={css.item} key="Reset">
          <Button onClick={updateReset}>
            Reset
          </Button>
        </li>
      )}
    </ul>
  );
};

export { Options };
