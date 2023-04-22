import Link from "next/link";
import { useRouter } from "next/router";
// import styles from './NavBar.module.css';

export default function NavBar() {
    const router = useRouter();

    return (
        <nav>
            <img src="/vercel.svg" />
            <div>
                <Link href='/'><span className={router.pathname === '/' ? 'active' : ''}>Home</span></Link>
                <Link href='/about'><span className={router.pathname === '/about' ? 'active' : ''}>About</span></Link>
            </div>

            {/* 스타일 코드는 해당 스코프에서만 동작 ==> 다른 페이지와 클래스명 중복 고려 X */}
            {/* 태그 이름으로 css 적용 가능 */}
            <style jsx>{`
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav span {
                    font-weight: 600;
                    font-size: 18px;
                }
                .active {
                    color: tomato;
                }
                nav div {
                    display: flex;
                    gap: 10px;
                }
            `}</style>

            {/* css module 적용 빙법 > 코드가 지저분해지므로 사용 자제 */}
            {/* 빌드될 때 className을 무작위로 바꿔줌. 중복 걱정 X */}
            {/* 하나의 문자열로 만들어줘야하기 때문에 `${}` 형태 사용 */}
            {/* <Link href='/'><span className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`}>Home</span></Link> */}
            {/* <Link href='/about'><span className={`${styles.link} ${router.pathname === '/about' ? styles.active : ''}`}>About</span></Link> */}
        </nav>
    )
}