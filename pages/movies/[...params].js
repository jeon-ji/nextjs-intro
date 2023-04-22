// url : /movies/1, /movies/123 등

import Seo from "../../components/Seo";

// url 파라미터로 값 받을 경우 파일명 [변수명].js로 사용
export default function Detail({params}) {
    const [title, id] = params ||[];
    
    return (
        <div>
            <Seo title={title} />
            <h4>{title}</h4>
        </div>
    );
}

// 사용자에게 loading 단계를 표출하지 않고 SEO에 최적화
// fetch를 위함이 아닌 데이터를 조금 더 빨리 가져오기 위한 작업
export function getServerSideProps({params: {params}}) {
    return {
        props: {
            params,
        }
    }
}