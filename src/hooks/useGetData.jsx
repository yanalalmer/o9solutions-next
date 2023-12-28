import React from 'react';
import axios from 'axios';

export const useGetData = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const postId = process.env.NEXT_PUBLIC_API_POST_ID;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          url,
          { post_id: postId },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('reposne is', response.data.data.blocks[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
};
