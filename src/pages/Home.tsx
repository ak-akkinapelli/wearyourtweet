import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/home.module.scss';
const HomePage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const fetchTweet = async (tweetId: string) => {
    const url = `/twitter-api/2/tweets/${tweetId}`;
    const bearerToken = `Bearer AAAAAAAAAAAAAAAAAAAAAKxRswEAAAAAkC9lkHMjSlIKsge%2BAj2wn44QQQY%3DrIaXfbwqdgYXu2qa85f9xjA2e0F8PIxcRVgLNtyTST0qeTkR6b`;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: bearerToken,
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      navigate('/product');
    } catch (error) {
      console.error('Error fetching tweet:', error);
      return null;
    }
  };
  const handleInputSubmit = () => {
    if (!inputValue) return;
    const tweetId = inputValue?.split('/').pop()?.split('?')[0] ?? 'invalid-tweet';
    if (tweetId === 'invalid-tweet') return;
    fetchTweet(tweetId);
  };

  return (
    <section className={styles.mainSection}>
      <section className={styles.leftSection}>
        <input
          type='text'
          placeholder='Your tweet link here'
          value={inputValue}
          className={styles.input}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleInputSubmit}>Rumble</button>
      </section>
      <section className={styles.rightSection}>
        <h1>3 steps to be unique</h1>
        <p>Enter a tweet's URL</p>
        <p>Select the size and color</p>
        <p>Checkout and be patient for a week</p>
      </section>
    </section>
  );
};
export default HomePage;
