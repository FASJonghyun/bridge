import BridgePage from "./bridge_page/BridgePage";
import { makeMetadata } from "./utils/meta_data";

export async function generateMetadata({searchParams}) {


  return makeMetadata(
    searchParams.title,
    searchParams.desc,
    searchParams.page,
  );
};


export default function Home({searchParams}) {
  console.log('THIS IS SEARCH PARAM');
  console.log(searchParams);
  return (
    <div id="Home">
      <BridgePage/>
    </div>
  );
}
