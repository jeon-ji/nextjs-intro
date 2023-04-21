import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import "../styles/globals.css"

// 다른 페이지를 렌더링하기 전에 먼저 렌데링될 파일
// 코드 중복을 최소화 하기 위함
// Component > 렌더링할 페이지
export default function App ({Component, pageProps}) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}