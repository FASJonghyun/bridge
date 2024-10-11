import BridgePage from "./bridge_page/BridgePage";
import { makeMetadata } from "./utils/meta_data";

export async function getStaticPaths() {
  // 예시로 미리 생성하고자 하는 ID 리스트를 정의
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // 정의된 경로만 빌드
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  return {
    props: {
      id,
    },
  };
}

export async function generateMetadata({ params }) {
  const { id } = params;

  return makeMetadata(
    `브릿지메타데이터 - ${id}`,
    "패션앤스타일(Fashion & Style)이 제공하는 최신 트렌드 패션 아이템과 다양한 셀럽들의 스타일을 만나보세요.",
    "https://www.fashionandstyle.com/withdraw",
  );
}

export default function Home({ id }) {
  console.log('#### CHECKING PARAM ON Client');
  console.log(id);

  return (
    <div id="Home">
      <BridgePage />
    </div>
  );
}
