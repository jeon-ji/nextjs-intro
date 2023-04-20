import Link from "next/link";
import { useRouter } from "next/router";
// import styles from './NavBar.module.css';

export default function NavBar() {
    const router = useRouter();

    return (
        <nav>
            <Link href='/'><span className={router.pathname === '/' ? 'active' : ''}>Home</span></Link>
            <Link href='/about'><span className={router.pathname === '/about' ? 'active' : ''}>About</span></Link>
            {/* 스타일 코드는 해당 스코프에서만 동작 ==> 다른 페이지와 클래스명 중복 고려 X */}
            {/* 태그 이름으로 css 적용 가능 */}
            <style jsx>{`
                nav {
                    background-color: tomato;
                }
                .active {
                    color: yellow;
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