// 파일명 === 경로명
import Link from "next/link";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

// 컴포넌트명은 경로와 무관함.
// 서버에서 getServerSideProps 실행 후 results 값 받아옴
export default function Home({ results }) {
    const router = useRouter();

    const onClick = (id, title) => {
        router.push(`/movies/${title}/${id}`);
        // router.push(
        //   {
        //     pathname: `/movies/${id}`,
        //     query: {    // router.query 안에 데이터가 들어감
        //       title,
        //     },
        //   },
        //   `/movies/${id}`   // 브라우저에(사용자에게) 보일 url 주소
        // );
    }

    // import 없이 jsx 문법 사용 가능
    return (
        <div className="container">
            <Seo title="Home" />
            {results?.map((movie) => (
                <div key={movie.id} className="movie" onClick={() => onClick(movie.id, movie.original_title)}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <h4>
                        <Link 
                            href={`/movies/${movie.original_title}/${movie.id}`}
                            // href={{
                            //     pathname: `/movies/${movie.id}`,
                            //     query: {
                            //         title: movie.original_title,
                            //     },
                            // }}
                            // as={`/movies/${movie.id}`}
                        >
                            {movie.original_title}
                        </Link>
                    </h4>
                </div>
            ))}

            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .movie {
                    cursor: pointer;
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

// 이름 중요. 무조건 getServerSideProps 사용!
// 서버쪽에서만 실행되는 코드
// 페이지가 사용자에게 보여지기 전, props를 받아오는 함수 생성
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}