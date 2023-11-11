'use client';
import { useState } from 'react';

export default function usePagenation(last) {
  const [page, setPage] = useState(0);

  const prev = () => {
    if (page !== 0) {
      setPage((prev) => (prev -= 1));
    }
  };
  const next = () => {
    if (last !== page) {
      setPage((prev) => (prev += 1));
    }
  };

  return { prev, next, page };
}
