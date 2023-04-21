// 파일명 === 경로명
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

// 컴포넌트명은 경로와 무관함.
export default function Home() {
    const [movies, setMovies] = useState();

    useEffect(() => {
      (async () => {
        const { results } = await (await fetch(`/api/movies`)).json();
        setMovies(results);
      })();
    }, []);

    // import 없이 jsx 문법 사용 가능
    return (
        <div className="container">
            <Seo title="Home" />
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                <div className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <h4>{movie.original_title}</h4>
                </div>
            ))}

            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>
            {/* style 태그에 global 옵션 추가 > 전역적으로 사용 가능 */}
            {/* 주의. 페이지 경로가 달라질 경우 해당 코드는 동작하지 않음 */}
            {/* <style jsx global>{`
            
            `}</style> */}
        </div>
    )
}