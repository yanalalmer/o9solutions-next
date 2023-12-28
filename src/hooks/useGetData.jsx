import React from 'react';
import axios from 'axios';
// state
import { useSetRecoilState } from 'recoil';
import { loadingState, errorState, agendaState } from '@/state';

export const useGetData = () => {
  const setAgenda = useSetRecoilState(agendaState);
  const setLoading = useSetRecoilState(loadingState);
  const setError = useSetRecoilState(errorState);
  const url = process.env.NEXT_PUBLIC_API_URL;
  const postId = process.env.NEXT_PUBLIC_API_POST_ID;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          url,
          { post_id: postId },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        setAgenda(response.data.data.blocks[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
};
