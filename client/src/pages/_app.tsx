import { RecoilEnv, RecoilRoot } from "recoil"
import "../../styles/globals.css"
import Head from "next/head"
import Notification from "components/notification/notification"

function MyApp({ Component, pageProps }: any) {
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false
  return (
    <>
      <Head>
        <title>2024 새벽이슬 동계 수련회</title>
        <meta
          name="title"
          property="og:title"
          content="2024 새벽이슬 동계 수련회"
        />
        <meta
          name="description"
          property="og:description"
          content="내 귀에 들린 대로 행하리니 &lt; 민 14 : 28 &gt;"
        />
        <meta name="image" property="og:image" content="/main_bg.jpg" />
        <meta name="url" property="og:url" content="main_bg.jpg" />
      </Head>
      <RecoilRoot>
        <Notification />
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default MyApp
