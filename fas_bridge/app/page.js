import BridgePage from "./bridge_page/BridgePage";
import { makeMetadata } from "./utils/meta_data";

export async function generateMetadata({searchParams}) {

  // console.log("SEARCH PARAMS > generateMetadata");
  // console.log(searchParams);
  // console.log('');


  console.log(searchParams.title);
  console.log(searchParams.desc);
  console.log(searchParams.page);

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
