import BridgePage from "./bridge_page/BridgePage";
import { makeMetadata } from "./utils/meta_data";

export async function generateMetadata() {
  return makeMetadata(
    "회원탈퇴 | 패션앤스타일 (Fashion & Style)",
    "패션앤스타일(Fashion & Style)이 제공하는 최신 트렌드 패션 아이템과 다양한 셀럽들의 스타일을 만나보세요.",
    "https://www.fashionandstyle.com/withdraw",
  );
};


export default function Home() {
  return (
    <div id="Home">
      <BridgePage/>
    </div>
  );
}
