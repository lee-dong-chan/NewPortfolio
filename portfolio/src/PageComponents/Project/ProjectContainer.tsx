import ProjectComp from "./ProjectComp";

export interface IProject {
  title: string;
  idx: number;
  img: string[];
  pagename?: string[];
  link: string;
  page1: {
    info: { date: string; menber: string; explanation: string };
    works: string[];
    skills: string[];
    make: { text: string[]; sub?: { idx: number; text: string[] } };
  };
}
interface IProps {
  ProjectRef: React.RefObject<HTMLDivElement>;
  position: number;
}

const ProjectContainer = ({ ProjectRef, position }: IProps): JSX.Element => {
  const ProjectData: IProject[] = [
    {
      title: "Pinterest",
      idx: 1,
      img: [
        "pinterest1.png",
        "pinterest2.png",
        "pinterest3.png",
        "pinterest4.png",
      ],
      link: "https://pinterest.dsongc.com/",
      page1: {
        info: {
          date: "2024.08.20 ~ 2024.09.19(31일)",
          menber: "개인 프로젝트",
          explanation:
            " Next.js와 Nest.js를  자율적으로 조사 및 학습하여 구현해보는 핀터레스트 반응형 웹사이트 입니다.",
        },
        works: [
          "프로젝트 문서화 및 설계",
          "적용할 기술에 대한 조사",
          "프론트 엔드 구현",
          "반응형 웹 적용",
          "백엔드 구현",
          "프로젝트 배포",
        ],
        skills: [
          "TypeScript",
          "Next.js",
          "Tailwind CSS",
          "Recoil",
          "React Query",
          "Google Oauth",
          "Nest.js",
          "Mysql",
          "Express",
          "axios",
          "Git/GitHub",
        ],
        make: {
          text: [
            "세션 및 GoogleOauth를 사용하여 로그인 구현",
            "정규표현식을 사용하여 모바일 기기접속을 체크하고 반응형 페이지 구현.",
            "Framer.motion라이브러리를 사용하여 애니메이션 배너를 구현.",
            "useInfiniteQuery을 사용하여 무한스크롤을 구현하고 Mansoy 카드형레이아웃을 적용.",
            "로딩 및 에러 페이지 적용",
          ],
        },
      },
    },
    {
      title: "Hamster Market",
      idx: 2,
      img: ["hamster1.png", "hamster2.png", "hamster3.png", "hamster4.png"],
      link: "https://hamster.dsongc.com/",
      pagename: ["햄스터 마켓", "관리자 페이지", "택배기사 페이지"],
      page1: {
        info: {
          date: "2024.07.05 ~ 2024.08.05(32일)",
          menber: "4인(팀원)",
          explanation:
            "미션가이드에 따라 구매자와 판매자가 택배사를 통하여 거래할수있는 중고거래사이트를 React와 tailwindCss를 사용하여 구현한 프로젝트.",
        },
        works: [
          "Figma를 이용하여 프로젝트 디자인",
          "역활에 따른 프론트엔드 구현",
          "반응형 적용",
          "프로젝트 배포",
        ],
        skills: [
          "TypeScript",
          "React",
          "Tailwind CSS",
          "Recoil",
          "React Query",
          "Figma",
          "DaumAPI",
        ],
        make: {
          text: [
            "로그인 기능 및 아이디/비밀번호 찾기 프론트엔드 구현",
            "포인트 표시/층전 기능 구현",
            "최근 조회한 상품목록 기능 구현",
            "검색창을 통한 카테고리페이지 이동기능 및 검색기능 구현",
            "Daum주소 API를 통해 구매 모달창에서 주소 검색 및 저장기능 구현",
            "모바일 UI 및 반응형 적용",
            "관리자 페이지 UI 및 기능구현(금지키워드,신고관리,카테고리관리,포인트비율,배송비)",
            "택배기사 페이지 UI 및 기능구현(픽업목록,배송목록,픽업등록,배송등록,배송기사정보)",
          ],
        },
      },
    },
    {
      title: "Yogiyo",
      idx: 3,
      img: ["yogiyo1.png", "yogiyo2.png", "yogiyo3.png", "yogiyo4.png"],
      link: "https://yogi.dsongc.com/",
      page1: {
        info: {
          date: "2024.06.13 ~ 2024.06.28(16일)",
          menber: "개인 프로젝트",
          explanation:
            "React와 tailwindcss의 사용방법을 익히기 위해 요기요 PC페이지 UI를 Typescript를 적용하여 구현해보는 프로젝트 입니다.",
        },
        works: ["프론트엔드 구현", "프로젝트 배포"],
        skills: ["TypeScript", "React", "Tailwind CSS"],
        make: {
          text: [
            "Props에 따른 메인페이지 카테고리 목록 UI 구현 ",
            "Props에 따른 상점 리스트 페이지 UI 및 카테고리 메뉴바를 구현",
            "상점 상세 페이지 UI 구현",
            "로그인 페이지 UI 구현",
          ],
        },
      },
    },
    {
      title: "Thunder Market",
      idx: 4,
      img: ["thunder1.png", "thunder2.png", "thunder3.png", "thunder4.png"],
      link: "https://thunder.dsongc.com/",
      pagename: ["번개장터", "관리자페이지"],
      page1: {
        info: {
          date: "2024.05.19 ~ 2024.06.4(17일)",
          menber: "2인(팀장)",
          explanation:
            "팀원과의 협업을 통한 프로젝트 경험과 여러 라이브러리를 사용한 서버구축 및 DB구축 경험을 위한 프로젝트입니다.",
        },
        works: [
          "API문서 ,플로우차트,시퀀스 다이어그램 등 프로젝트 문서화 및 설계",
          "요청받은 ERD대로 DB구성",
          "업무분배한 기능별 프론트엔드 (메인,상품목록,카테고리페이지,관리자페이지) 및 백엔드서버 구축",
          "git및 GitHub를 사용하여 프로젝트 브랜치병합 및 관리",
          "프로젝트 배포",
        ],
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "Express",
          "Sequelize",
          "axios",
          "Mysql",
          "GitHub",
          "Git",
        ],
        make: {
          text: [
            "세션을 통한 로그인 로그아웃 기능구현 ",
            "상품 검색 및 조건에 따른 상품 정렬기능 구현",
            "카테고리별 상품분류 기능 구현",
            "최근 조회상품 표시 기능구현",
            "관리페이지 유저관리,게시글 삭제,카테고리관리 기능구현",
          ],
        },
      },
    },
    {
      title: "LoL Inven",
      idx: 5,
      img: ["lol1.png", "lol2.png"],
      link: "https://lol.dsongc.com/",
      page1: {
        info: {
          date: "2024.03.14 ~ 2024.04.08 (26일)",
          menber: "개인 프로젝트",
          explanation:
            "페이지 구현능력 향상과 Http 프로토콜을 이해하기위해 기본적인 net모듈을 사용하여 서버를 구축하여 LOL인벤 게시판을 구현해본 개인 프로젝트 입니다.",
        },
        works: ["프론트엔드 및 백엔드", "프로젝트 배포"],
        skills: ["HTML", "CSS", "JavaScript", "node.js"],
        make: {
          text: [
            "net모듈 서버가 요청헤더와 바디를 파싱하여 path와 method를 체크하도록 구현",
            "path와 method에 따라 Content-Type과 바디를 전달받아 응답헤더와 바디를 구성하여 해당 페이지의 HTML,JS,CSS,게시글 데이터를 응답하도록 구현",
            "HTML의 form태그와 fetch를 사용하여 서버에 요청을 보내고 net모듈을 사용한 서버가 전달받은 게시글 데이터를 배열에 저장하도록 게시글 작성기능을 구현",
            "게시글에 접속하여 path가 “/board”이면 해당하는 HTML,JS,CSS를 불러오고 쿼리스트링을 통하여 게시글을 구분하여 게시글의 정보를 요청, 해당 게시글의 내용을 표현하도록 구현",
          ],
        },
      },
    },
  ];

  return (
    <ProjectComp
      project={ProjectData}
      ProjectRef={ProjectRef}
      position={position}
    />
  );
};
export default ProjectContainer;
