"use client"; // 이 지시어를 추가하여 클라이언트 컴포넌트로 설정

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // next/router 대신 next/navigation 사용
import Head from "next/head";

function BridgePage() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter(); // next/navigation의 useRouter 사용

  useEffect(() => {
    document.title = "패션&스타일";
    handlePageLoad();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.__PRERENDER_INJECTED) {
      handlePageLoad();
    }
  }, [router]);

  const handlePageLoad = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const targetUrl = window.location.href;
    const inAppBrowserPattern = /kakaotalk|line|inapp|naver|snapchat|wirtschaftswoche|thunderbird|instagram|everytimeapp|whatsapp|electron|wadiz|aliapp|zumapp|whale|kakaostory|band|twitter|daumapps|daumdevice\/mobile|fb_iab|fb4a|fban|fbios|fbss|trill|samsungbrowser\/[^1]/i;

    const externalUrl = 'https://www.fashionandstyle.com';

    if (userAgent.match(/kakaotalk/i)) {
      window.location.href = 'fashionandstyle://' + externalUrl.replace(/^https?:\/\//i, '');
    } else if (userAgent.match(/line/i)) {
      if (targetUrl.indexOf('?') !== -1) {
        window.location.href = 'fashionandstyle://' + externalUrl.replace(/^https?:\/\//i, '');
      } else {
        window.location.href = 'fashionandstyle://' + externalUrl.replace(/^https?:\/\//i, '');
      }
    } else if (document.referrer.includes('instagram.com')) {
      if (/android/i.test(userAgent)) {
        window.location.href = 'intent://' + externalUrl.replace(/^https?:\/\//i, '') + '#Intent;scheme=https;package=com.android.chrome;end';
      } else if (/iphone|ipad|ipod/i.test(userAgent)) {
        window.location.href = 'fashionandstyle://' + externalUrl.replace(/^https?:\/\//i, '');
      } else {
        window.location.href = externalUrl;
      }
      setTimeout(() => {
        setShowModal(true);
        window.location.replace(externalUrl);
      }, 2000);
    } else if (userAgent.match(inAppBrowserPattern)) {
      if (/iphone|ipad|ipod/i.test(userAgent)) {
        window.location.href = 'https://www.fashionandstyle.com/';
        setTimeout(() => {
          setShowModal(true);
          window.location.replace("https://www.fashionandstyle.com");
        }, 2000);
      } else {
        window.location.href = 'intent://' + targetUrl.replace(/https?:\/\//i, '') + '#Intent;scheme=https;package=com.android.chrome;end';
      }
    } else if (/android/i.test(userAgent)) {
      window.location.href = 'https://www.fashionandstyle.com/';
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
    } else if (/iphone|ipad|ipod/.test(userAgent) && !window.MSStream) {
      window.location.href = 'https://www.fashionandstyle.com/';
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
    }
  };

  const handleStoreRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.fas.android";
    } else if (/iphone|ipad|ipod/i.test(userAgent) && !window.MSStream) {
      window.location.href = "https://apps.apple.com/app/id1620312420";
    }
  };

  return (
    <>
      <Head>
        <meta property="og:title" content="패션&스타일2" />
        <meta property="og:description" content="패션&스타일2" />
        <meta property="og:image" content="https://d1yzfoqf37d0dc.cloudfront.net/media/admin/post_images/2024/09/24/5c4d9419-b55e-42c8-8dcf-212a5187b163_20240924124908.jpg" />
        <meta property="og:url" content="https://www.fashionandstyle.com" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <title>패션&스타일</title>
      </Head>
      <div>
        <h1>브릿지 페이지 입니다.</h1>
        <p>잠시 후 앱으로 이동합니다. 이동되지 않으면 앱 스토어에서 설치해주세요.</p>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>앱 열기 실패</h2>
              <p>앱을 여는 데 실패했습니다. 앱스토어로 이동하여 앱을 설치하거나 다시 시도하세요.</p>
              <button onClick={handleStoreRedirect}>앱스토어로 이동</button>
              <button onClick={handlePageLoad}>다시 시도</button>
            </div>
          </div>
        )}
        <div>
          <a id="moveToAPP" href="https://www.fashionandstyle.com/">앱에서 열기</a>
          <p>또는</p>
          <a href="https://apps.apple.com/app/id1620312420">앱스토어에서 설치</a>
        </div>
      </div>
    </>
  );
}

export default BridgePage;
