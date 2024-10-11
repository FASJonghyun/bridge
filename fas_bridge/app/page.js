"use client";

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import BridgePage from "./bridge_page/BridgePage";

export default function Home() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    if (id) {
      console.log('#### CHECKING PARAM ON Client');
      console.log(id);
    }
  }, [id]);

  return (
    <div id="Home">
      <BridgePage />
    </div>
  );
}
