"use client"; // 이 지시어를 맨 위에 추가하여 클라이언트 컴포넌트로 선언

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import BridgePage from "./bridge_page/BridgePage";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

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
