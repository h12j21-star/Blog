'use client';
import { useState } from 'react';

export default function usePagenation() {
  const [page, setPage] = useState(0);

  const prev = () => {
    setPage((prev) => (prev -= 1));
  };
  const next = () => {
    setPage((prev) => (prev += 1));
  };

  return { prev, next, page };
}
