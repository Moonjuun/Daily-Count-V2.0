import Head from "next/head";
import CommonCal from "./Calculator/CommonCal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daily Count 데일리 카운트 - 당신의 일상 속 계산기</title>
        <meta charset="utf-8" />
        <meta name="referrer" content="always" />
        <meta
          name="description"
          content="데일리 카운트, 당신의 일상 속 모든 계산기, 계산기, 일반 계산, 만나이 계산기, 이자 계산기, 적금 계산기, 예금 계산기, 시급 계산, 단위 환산, 단위 계산, 날짜 계산, 글자수 계산, 비만도 계산, 퍼센트 계산, 길이 계산, 넓이 계산, 무게 계산, 부피 계산, 온도 계산, 압력 계산, 속도 계산, 연비 계산, 데이터 계산"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="naver-site-verification"
          content="67f0f075f4772fe9f2d3c370f0ffc4f63ee2120d"
        />
        <meta
          name="keywords"
          content="데일리 카운트, 계산기, 일반 계산, 이자 계산기, 적금 계산기, 예금 계산기, 만나이 계산기, 시급 계산, 단위 환산, 단위 계산, 날짜 계산, 글자수 계산, 비만도 계산, 퍼센트 계산, 길이 계산, 넓이 계산, 무게 계산, 부피 계산, 온도 계산, 압력 계산, 속도 계산, 연비 계산, 데이터 계산"
        />
        <meta name="robots" content="index,follow" />
        <meta
          property="og:site_name"
          content="Daily Count 데일리 카운트, 당신의 일상 속 계산기"
        />
        <meta
          property="og:image"
          content="/DailyCount.png"
          alt="Daily Count 데일리 카운트, 당신의 일상 속 계산기"
        />
        <meta
          property="og:title"
          content="daily-count 데일리 카운트, 당신의 일상 속 계산기"
        />
        <meta
          property="og:description"
          content="데일리 카운트, 당신의 일상 속 계산기"
        />
        <meta property="og:url" content="https://www.daily-count.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Daily Count 데일리 카운트" />
        <meta
          name="twitter:description"
          content="데일리 카운트, 당신의 일상 속 모든 계산기, 계산기, 일반 계산, 이자 계산, 만나이 계산기, 적금 계산기, 예금 계산기, 시급 계산, 단위 환산, 단위 계산, 날짜 계산, 글자수 계산, 비만도 계산, 퍼센트 계산, 길이 계산, 넓이 계산, 무게 계산, 부피 계산, 온도 계산, 압력 계산, 속도 계산, 연비 계산, 데이터 계산"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6915584561138880"
          crossorigin="anonymous"
        ></script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C4ER74BPMR"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C4ER74BPMR');
          `,
          }}
        />
      </Head>
      <CommonCal></CommonCal>
    </>
  );
}
