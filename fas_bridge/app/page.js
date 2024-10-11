// page.js 또는 해당 파일 위치
import BridgePage from "./bridge_page/BridgePage";
import { makeMetadata } from "./utils/meta_data";

export async function generateMetadata({ searchParams }) {
  const id = searchParams.id || "기본값"; // 파라미터가 없을 경우 기본값 설정

  // id에 따라 메타데이터를 다르게 설정할 수 있습니다.
  // 예를 들어, id가 특정 값일 때 다른 제목이나 설명을 사용할 수 있습니다.
  const title = id
    ? `회원탈퇴 | 패션앤스타일 (Fashion & Style) - ID: ${id}`
    : "회원탈퇴 | 패션앤스타일 (Fashion & Style)";
  
  const description = id
    ? `패션앤스타일(Fashion & Style)이 제공하는 최신 트렌드 패션 아이템과 다양한 셀럽들의 스타일을 만나보세요. 회원 ID: ${id}`
    : "패션앤스타일(Fashion & Style)이 제공하는 최신 트렌드 패션 아이템과 다양한 셀럽들의 스타일을 만나보세요.";
  
  const url = id
    ? `https://www.fashionandstyle.com/withdraw?id=${id}`
    : "https://www.fashionandstyle.com/withdraw";

  return makeMetadata(title, description, url);
}

export default function Home() {
  return (
    <div id="Home">
      <BridgePage/>
    </div>
  );
}
