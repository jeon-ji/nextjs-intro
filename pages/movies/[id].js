// url : /movies/1, /movies/123 등

import { useRouter } from "next/router";

// url 파라미터로 값 받을 경우 파일명 [변수명].js로 사용
export default function Detail() {
    const router = useRouter();
    
    return (
        <div>
            <h4>{router.query.title || 'Loading...'}</h4>
        </div>
    );
}