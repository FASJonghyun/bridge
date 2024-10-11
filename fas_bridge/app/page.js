// page.js
import BridgePage from "./bridge_page/BridgePage";
import { makeMetadata } from "./utils/meta_data";

export const dynamic = 'force-dynamic'; // 페이지를 동적으로 설정

export async function generateMetadata({ searchParams }) {
  const id = searchParams.id || "default";

  const title = id !== "default"
    ? `회원탈퇴 | 패션앤스타일 (Fashion & Style) - ID: ${id}`
    : "회원탈퇴 | 패션앤스타일 (Fashion & Style)";
  
  const description = id !== "default"
    ? `패션앤스타일(Fashion & Style)이 제공하는 최신 트렌드 패션 아이템과 다양한 셀럽들의 스타일을 만나보세요. 회원 ID: ${id}`
    : "패션앤스타일(Fashion & Style)이 제공하는 최신 트렌드 패션 아이템과 다양한 셀럽들의 스타일을 만나보세요.";
  
  const url = id !== "default"
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
