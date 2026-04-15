import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotes } from '../../features/quote/quoteSlice';
import styles from './styles.module.css';

function Quote() {
  const dispatch = useDispatch();
  const { author, cur_quote } = useSelector((state) => state.quotes);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  return (
    <div>
      <p className={styles.quote}>{cur_quote}</p>

      <p className={styles.author}>- {author}</p>

      <button onClick={() => dispatch(fetchQuotes())}>New Quote</button>
    </div>
  );
}
export default Quote;
