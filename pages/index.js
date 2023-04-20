// 파일명 === 경로명
// 컴포넌트명은 경로와 무관함.
export default function Home() {
    // import 없이 jsx 문법 사용 가능
    return (
        <div>
            <h1>Home</h1>
            {/* style 태그에 global 옵션 추가 > 전역적으로 사용 가능 */}
            {/* 주의. 페이지 경로가 달라질 경우 해당 코드는 동작하지 않음 */}
            {/* <style jsx global>{`
            
            `}</style> */}
        </div>
    )
}