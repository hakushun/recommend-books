import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout';

const Book: React.VFC = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Layout>Book Id: {id}</Layout>;
};

export default Book;
