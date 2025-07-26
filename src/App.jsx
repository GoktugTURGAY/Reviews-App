import { useState, useEffect } from 'react';
import MainWrapper from './components/MainWrapper';
import Header from './components/Header';
import ReviewList from './components/ReviewList';
import ReviewAddition from './components/ReviewAddition';
import ReviewStats from './components/ReviewStats';
import AddReview from './components/AddReview';
import DeleteReview from './components/DeleteReview';
import Spinner from './components/Spinner';

const App = () => {
  /* STATES */
  const [reviewsData, setReviewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastId, setLastId] = useState(null);

  /* FETCHING DATA FROM API */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/reviews');
        const data = await res.json();
        setReviewsData(data);
        setLastId(data.length + 1);
      } catch (error) {
        console.log(`Error loading the data: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <MainWrapper>
        <ReviewAddition
          addReview={AddReview}
          lastId={lastId}
          setLastId={setLastId}
        />

        <ReviewStats reviewsData={reviewsData} />

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <ReviewList reviewsData={reviewsData} DeleteReview={DeleteReview} />
        )}
      </MainWrapper>
    </>
  );
};

export default App;
