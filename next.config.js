const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  // url 변경
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",   // url 입력 주소
        destination: "/new-sexy-blog/:path*",   // 이동할 경로
        permanent: false,
      },
    ];
  },
  // url은 변경하지 않고, contents만 변경
  // fake url 생성
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};