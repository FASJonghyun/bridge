"use client"; 

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import BridgePage from "./bridge_page/BridgePage";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      // 'og:title' 메타 태그 업데이트
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', `브릿지메타데이터 - ${id}`);
      } else {
        const newOgTitle = document.createElement('meta');
        newOgTitle.setAttribute('property', 'og:title');
        newOgTitle.setAttribute('content', `브릿지메타데이터 - ${id}`);
        document.head.appendChild(newOgTitle);
      }

      // 'og:description' 메타 태그 업데이트
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute(
          'content',
          '패션앤스타일(Fashion & Style)이 제공하는 최신 트렌드 패션 아이템과 다양한 셀럽들의 스타일을 만나보세요.'
        );
      } else {
        const newOgDescription = document.createElement('meta');
        newOgDescription.setAttribute('property', 'og:description');
        newOgDescription.setAttribute(
          'content',
          '패션앤스타일(Fashion & Style)이 제공하는 최신 트렌드 패션 아이템과 다양한 셀럽들의 스타일을 만나보세요.'
        );
        document.head.appendChild(newOgDescription);
      }

      // 'og:url' 메타 태그 업데이트
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', `https://www.fashionandstyle.com/withdraw?id=${id}`);
      } else {
        const newOgUrl = document.createElement('meta');
        newOgUrl.setAttribute('property', 'og:url');
        newOgUrl.setAttribute('content', `https://www.fashionandstyle.com/withdraw?id=${id}`);
        document.head.appendChild(newOgUrl);
      }
    }
  }, [id]);

  return (
    <div id="Home">
      <BridgePage />
    </div>
  );
}
