import BridgePage from "./bridge_page/BridgePage";
import { makeMetadata } from "./utils/meta_data";

export async function generateMetadata({searchParams}) {

  console.log(searchParams.title);
  console.log(searchParams.desc);
  console.log(searchParams.page);
  console.log(searchParams.image);

  return makeMetadata(
    searchParams.title,
    searchParams.desc,
    searchParams.page,
    searchParams.image,
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
