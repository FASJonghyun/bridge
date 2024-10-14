"use client"; 

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function BridgePage({type,id}) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();


  useEffect(() => {
    handlePageLoad();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.__PRERENDER_INJECTED) {
      handlePageLoad();
    }
  }, [router]);

  const timeOutMethod = () => {
    const clipboardText = "This is the string you want to save to clipboard";
  
    // 클립보드 API를 사용해 복사
    if (navigator.clipboard && window.isSecureContext) {
      // 비동기적으로 클립보드에 텍스트를 저장
      navigator.clipboard.writeText(clipboardText).then(() => {
        console.log('클립보드에 문자열이 저장되었습니다.');
      }).catch((err) => {
        console.error('클립보드에 접근할 수 없습니다: ', err);
      });
    } else {
      // Clipboard API가 지원되지 않는 경우 (구형 브라우저)
      const textArea = document.createElement("textarea");
      textArea.value = clipboardText;
      // 보이지 않게 하고, DOM에 추가
      textArea.style.position = "fixed";
      textArea.style.opacity = 0;
      document.body.appendChild(textArea);
      // 텍스트 선택 및 복사
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand('copy');
        const msg = successful ? '클립보드에 문자열이 저장되었습니다.' : '클립보드 복사에 실패했습니다.';
        console.log(msg);
      } catch (err) {
        console.error('클립보드 복사 중 오류 발생: ', err);
      }
      // 텍스트 영역 삭제
      document.body.removeChild(textArea);
    }
  
    // 앱스토어로 이동
    if (/android/i.test(navigator.userAgent)) {
      window.location.replace("https://play.google.com/store/apps/details?id=com.fas.android");
    } else if (/iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream) {
      window.location.replace("https://apps.apple.com/app/id1620312420");
    }
  };

  // const handlePageLoad = () => {
  //   const userAgent = navigator.userAgent.toLowerCase();
  //   const targetUrl = window.location.href;
  //   const inAppBrowserPattern = /kakaotalk|line|inapp|naver|snapchat|wirtschaftswoche|thunderbird|instagram|everytimeapp|whatsapp|electron|wadiz|aliapp|zumapp|whale|kakaostory|band|twitter|daumapps|daumdevice\/mobile|fb_iab|fb4a|fban|fbios|fbss|trill|samsungbrowser\/[^1]/i;

  //   const externalUrl = 'https://www.fashionandstyle.com';

  //   if (userAgent.match(/kakaotalk/i)) {
  //     window.location.href = 'fashionandstyle://' + externalUrl.replace(/^https?:\/\//i, '');
  //   } else if (userAgent.match(/line/i)) {
  //     window.location.href = 'fashionandstyle://' + externalUrl.replace(/^https?:\/\//i, '');
  //   } else if (document.referrer.includes('instagram.com')) {
  //     if (/android/i.test(userAgent)) {
  //       window.location.href = 'intent://' + externalUrl.replace(/^https?:\/\//i, '') + '#Intent;scheme=https;package=com.android.chrome;end';
  //     } else if (/iphone|ipad|ipod/i.test(userAgent)) {
  //       window.location.href = 'fashionandstyle://' + externalUrl.replace(/^https?:\/\//i, '');
  //     } else {
  //       window.location.href = externalUrl;
  //     }
  //     setTimeout(() => {
  //       setShowModal(true);
  //       window.location.replace(externalUrl);
  //     }, 2000);
  //   } else if (userAgent.match(inAppBrowserPattern)) {
  //     if (/iphone|ipad|ipod/i.test(userAgent)) {
  //       window.location.href = 'https://www.fashionandstyle.com/';
  //       setTimeout(() => {
  //         setShowModal(true);
  //         window.location.replace("https://www.fashionandstyle.com");
  //       }, 2000);
  //     } else {
  //       window.location.href = 'intent://' + targetUrl.replace(/https?:\/\//i, '') + '#Intent;scheme=https;package=com.android.chrome;end';
  //     }
  //   } else if (/android/i.test(userAgent)) {
  //     window.location.href = 'https://www.fashionandstyle.com/';
  //     setTimeout(() => {
  //       setShowModal(true);
  //     }, 2000);
  //   } else if (/iphone|ipad|ipod/.test(userAgent) && !window.MSStream) {
  //     window.location.href = 'https://www.fashionandstyle.com/';
  //     setTimeout(() => {
  //       setShowModal(true);
  //     }, 2000);
  //   }
  // };

  // const handlePageLoad = () => {
  //   const userAgent = navigator.userAgent.toLowerCase();
  //   const targetUrl = window.location.href;
  //   const inAppBrowserPattern = /kakaotalk|line|inapp|naver|snapchat|wirtschaftswoche|thunderbird|instagram|everytimeapp|whatsapp|electron|wadiz|aliapp|zumapp|whale|kakaostory|band|twitter|daumapps|daumdevice\/mobile|fb_iab|fb4a|fban|fbios|fbss|trill|samsungbrowser\/[^1]/i;

  //   const externalUrl = 'https://www.fashionandstyle.com';
  //   const appScheme = `fashionandstyle://open?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}`;

  //   if (userAgent.match(/kakaotalk/i)) {
  //     window.location.href = appScheme;
  //   } else if (userAgent.match(/line/i)) {
  //     window.location.href = appScheme;
  //   } else if (document.referrer.includes('instagram.com')) {
  //     if (/android/i.test(userAgent)) {
  //       window.location.href = `intent://${externalUrl.replace(/^https?:\/\//i, '')}/open?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}#Intent;scheme=https;package=com.android.chrome;end`;
  //     } else if (/iphone|ipad|ipod/i.test(userAgent)) {
  //       window.location.href = appScheme;
  //     } else {
  //       window.location.href = externalUrl;
  //     }
  //     setTimeout(() => {
  //       setShowModal(true);
  //       window.location.replace(externalUrl);
  //     }, 2000);
  //   } else if (userAgent.match(inAppBrowserPattern)) {
  //     if (/iphone|ipad|ipod/i.test(userAgent)) {
  //       window.location.href = `${externalUrl}/open?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}`;
  //       setTimeout(() => {
  //         setShowModal(true);
  //         window.location.replace(externalUrl);
  //       }, 2000);
  //     } else {
  //       window.location.href = `intent://${targetUrl.replace(/https?:\/\//i, '')}/open?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}#Intent;scheme=https;package=com.android.chrome;end`;
  //     }
  //   } else if (/android/i.test(userAgent)) {
  //     window.location.href = `${externalUrl}/open?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}`;
  //     setTimeout(() => {
  //       setShowModal(true);
  //     }, 2000);
  //   } else if (/iphone|ipad|ipod/.test(userAgent) && !window.MSStream) {
  //     window.location.href = `${externalUrl}/open?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}`;
  //     setTimeout(() => {
  //       setShowModal(true);
  //     }, 2000);
  //   }
  // };

  const handlePageLoad = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const targetUrl = window.location.href;
    const inAppBrowserPattern = /kakaotalk|line|inapp|naver|snapchat|wirtschaftswoche|thunderbird|instagram|everytimeapp|whatsapp|electron|wadiz|aliapp|zumapp|whale|kakaostory|band|twitter|daumapps|daumdevice\/mobile|fb_iab|fb4a|fban|fbios|fbss|trill|samsungbrowser\/[^1]/i;

    const externalUrl = 'https://www.fashionandstyle.com';
    const appScheme = `fashionandstyle://open?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}`;

    // 페이스북 인앱 브라우저 감지
    const isFacebookInAppBrowser = /fb_iab|fb4a|fban|fbios/.test(userAgent);

    if (userAgent.match(/kakaotalk/i)) {
      window.location.href = appScheme;
    } else if (userAgent.match(/line/i)) {
      window.location.href = appScheme;
    } 
    // 페이스북 인앱 브라우저 처리 추가
    else if (isFacebookInAppBrowser) {
      window.location.href = appScheme;
      setTimeout(() => {
        setShowModal(true);
        // window.location.replace("https://apps.apple.com/app/id1620312420");
        if (/android/i.test(userAgent)) {
          window.location.replace("https://play.google.com/store/apps/details?id=com.fas.android");
        } else if (/iphone|ipad|ipod/i.test(userAgent) && !window.MSStream) {
          // window.location.href = "https://apps.apple.com/app/id1620312420";
          window.location.replace("https://apps.apple.com/app/id1620312420");
        }
      }, 2000);
    } 
    else if (document.referrer.includes('instagram.com')) {
      if (/android/i.test(userAgent)) {
        window.location.href = `fashionandstyle://${externalUrl.replace(/^https?:\/\//i, '')}/open?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}#Intent;scheme=https;package=com.android.chrome;end`;
      } else if (/iphone|ipad|ipod/i.test(userAgent)) {
        window.location.href = appScheme;
      } else {
        window.location.href = externalUrl;
      }
      setTimeout(() => {
        setShowModal(true);
        // if (/android/i.test(userAgent)) {
        //   window.location.replace("https://play.google.com/store/apps/details?id=com.fas.android");
        // } else if (/iphone|ipad|ipod/i.test(userAgent) && !window.MSStream) {
        //   // window.location.replace("https://apps.apple.com/app/id1620312420");
        //   window.location.replace(`https://apps.apple.com/app/id1620312420/?type=${type}&id=${id}`);
        // }
        // timeOutMethod();
      }, 2000);
    } 
    else if (userAgent.match(inAppBrowserPattern)) {
      if (/iphone|ipad|ipod/i.test(userAgent)) {
        window.location.href = `${externalUrl}/open?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}`;
        setTimeout(() => {
          setShowModal(true);
          // window.location.replace(externalUrl);
          if (/android/i.test(userAgent)) {
            window.location.replace("https://play.google.com/store/apps/details?id=com.fas.android");
          } else if (/iphone|ipad|ipod/i.test(userAgent) && !window.MSStream) {
            window.location.replace("https://apps.apple.com/app/id1620312420");
          }
        }, 2000);
      } else {
        window.location.href = `fashionandstyle://${targetUrl.replace(/https?:\/\//i, '')}/open?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}#Intent;scheme=https;package=com.android.chrome;end`;
        setTimeout(() => {
          setShowModal(true);
          // window.location.replace(externalUrl);
          if (/android/i.test(userAgent)) {
            window.location.replace("https://play.google.com/store/apps/details?id=com.fas.android");
          } else if (/iphone|ipad|ipod/i.test(userAgent) && !window.MSStream) {
            window.location.replace("https://apps.apple.com/app/id1620312420");
          }
        }, 2000);
      }
    } 
    else if (/android/i.test(userAgent)) {
      window.location.href = `${externalUrl}/open?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}`;
      setTimeout(() => {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(true);
          // window.location.replace(externalUrl);
          if (/android/i.test(userAgent)) {
            window.location.replace("https://play.google.com/store/apps/details?id=com.fas.android");
          } else if (/iphone|ipad|ipod/i.test(userAgent) && !window.MSStream) {
            window.location.replace("https://apps.apple.com/app/id1620312420");
          }
        }, 2000);
      }, 2000);
    } 
    else if (/iphone|ipad|ipod/.test(userAgent) && !window.MSStream) {
      window.location.href = `${externalUrl}/open?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}`;
      setTimeout(() => {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(true);
          // window.location.replace(externalUrl);
          if (/android/i.test(userAgent)) {
            window.location.replace("https://play.google.com/store/apps/details?id=com.fas.android");
          } else if (/iphone|ipad|ipod/i.test(userAgent) && !window.MSStream) {
            // window.location.href = "https://apps.apple.com/app/id1620312420";
            window.location.replace("https://apps.apple.com/app/id1620312420");
          }
        }, 2000);
      }, 2000);
    }
  };

  // const handleStoreRedirect = () => {
  //   const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  //   if (/android/i.test(userAgent)) {
  //     window.location.href = "https://play.google.com/store/apps/details?id=com.fas.android";
  //   } else if (/iphone|ipad|ipod/i.test(userAgent) && !window.MSStream) {
  //     window.location.href = "https://apps.apple.com/app/id1620312420";
  //   }
  // };

  const handleStoreRedirect = async () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const dataToCopy = `${type},$${id}`; // 클립보드에 저장할 데이터

    try {
      // 클립보드에 데이터 저장
      await navigator.clipboard.writeText(dataToCopy);
      console.log('클립보드에 데이터가 저장되었습니다:', dataToCopy);
    } catch (err) {
      console.error('클립보드에 데이터를 저장하는 데 실패했습니다:', err);
    }

    // 플랫폼에 따라 앱스토어로 리디렉션
    if (/android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.fas.android";
    } else if (/iphone|ipad|ipod/i.test(userAgent) && !window.MSStream) {
      window.location.href = "https://apps.apple.com/app/id1620312420";
    }
  };


  return (
    <>
      <div>
        <h1> 브릿지 페이지 입니다.</h1>
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
