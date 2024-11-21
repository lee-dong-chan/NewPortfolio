import { useMemo, useState } from "react";
import ProjectComp from "./ProjectComp";

export interface IProject {
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
  page2?: {
    make: { text: string[]; sub?: { idx: number; text: string[] } };
  };
  page3?: {
    make: { text: string[]; sub?: { idx: number; text: string[] } };
  };
}

interface IProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}
const ProjectContainer = ({ tab, setTab }: IProps): JSX.Element => {
  const [animate, setAnimate] = useState<string>("");
  const [view, setview] = useState<boolean>(false);
  const [project, setproject] = useState<number>(1);
  const [image, setimage] = useState<number>(0);
  const [Projectinfo, setProjectinfo] = useState<number>(1);
  const [maketext, setmaketext] = useState<number>(0);
  const ProjectName: string[] = useMemo(() => {
    return ["핀터레스트", "햄스터 마켓", "요기요", "번개장터", "LOL인벤"];
  }, []);
  const ProjectData: IProject = useMemo(() => {
    switch (project) {
      case 1:
        return {
          idx: 1,
          img: [
            "pinterest1.png",
            "pinterest2.png",
            "pinterest3.png",
            "pinterest4.png",
          ],
          link: "https://lee.dsongc.com/",
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
                "Next.js의 App라우팅 및 다이나믹 라우팅을 적용하여 페이지 구현",
                "로딩 및 에러 페이지 적용",
                "Session을 활용하여 로그인 기능을 구현하고 Google Oauth를 추가로 적용하여 소셜 로그인을 구현",
                "window.navigator.userAgent와 정규표현식을 사용하여 모바일 기기접속을 체크하고 모바일접속시 PC버전에서만 보이도록 설정한 사이트안내 페이지 대신 게시글 목록 페이지로 이동하도록 구현.",
                "브라우저의 너비를 체크하여 지정한 길이가 되면 해당state의 boolean값을 내보내는 커스텀훅을 작성하여 반응형 웹을 컨트롤하도록 구현",
                "Framer.motion라이브러리를 사용하여 사이트안내 페이지의 에니메이션 배너를 구현.",
                "useInfiniteQuery와 IntersectionObserver를 사용하여 무한스크롤을 구현하고 Mansoy라이브러리를 사용하여 카드형레이아웃을 정렬하도록 구현.",
                "QueryClient의 invaildateQueries를 사용하여 데이터를 패칭하도록 구현",
                "Multer의 FileInterceptor를 사용하여 게시글 및 프로필 이미지를 upload폴더에 저장하도록 구현",
                "모바일 웹에서 하단바 메뉴를 통해 유저가 모바일에 맞추어 변경된 페이지의 기능을 온전히 사용할수 있도록 구현",
              ],
              sub: {
                idx: 8,
                text: ["프로필사진 변경시", "게시글 댓글 작성시"],
              },
            },
          },
        };
      case 2:
        return {
          idx: 2,
          img: ["hamster1.png", "hamster2.png", "hamster3.png", "hamster4.png"],
          link: "https://hamster.dsongc.com/",
          pagename: ["햄스터 마켓", "관리자 페이지", "택배기사 페이지"],
          page1: {
            info: {
              date: "2024.07.05 ~ 2024.08.05(32일)",
              menber: "4인",
              explanation:
                "미션가이드에 따라 구매자와 판매자가 택배사를 통하여 거래할수있는 중고거래사이트를 React와 tailwindCss를 사용하여  구현한 프로젝트.",
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
                "로그인 여부에따라 state를 설정하고 레이아웃메뉴가 변화하도록 구현",
                "입력한 정보를 서버에 전달하여 아이디와 비밀번호를 찾을수 있도록 구현",
                "포인트정보를 서버로부터 받아오고 포인트를 충전할수 있도록 구현 useQuery로 불러온 포인트 값의 상태를 queryclient의 invalidateQueries를 통하여 키를 초기화하여 데이터를 패칭",
                "상품을 조회하면 쿠키에 +로 구분하여 상품의 id값을 문자열로 저장하고 메인페이지에서 최근본 상품을 불러올때 해당 문자열을 split하여 해당 배열을 서버로 전달하고 촤근 상품목록데이터를 전달받도록 구현.",
                "검색창에 카테고리 이름을 작성시 하위카테고리 목록메뉴를 출력하고 클릭시 해당 카테고리 상품목록 페이지로 이동, 검색버튼을 누를시에는 해당 검색어를 키워드로 검색페이지로 이동후 키워드를 포함하는 상품리스트를 출력하도록 구현",
                "상품조회시 해당상품의 이미지수에 따라 state를 관리하여 상태이미지 슬라이드를 생성하고 상품등록시 저장된 여러이미지를 확인할 수 있도록 구현",
                "상품구매버튼 클릭시 모달창이 작동하도록 state를 관리하고 DaumAPI를 사용하여 주소정보를 받아 등록버튼 클릭시 유저주소정보를 데이터베이스에 저장하도록 구현",
                "화면의 너비따라 state값을 반환하는 커스텀훅을 작성하고 해당커스텀훅을 통하여 모바일 웹에대한 반응형을 적용",
                "모바일 웹에서는 하단바를 통하여 유저가 페이지 기능을 사용할수 있도록 구현",
                "모바일 웹에서는  메뉴버튼 클릭시 로그인 메뉴 카테고리 목록이 나타나도록 구현",
                "모바일 웹에서 검색버튼 클릭시 검색창을 출력하고 검색시 검색페이지로 이동하도록 구현",
                "최근 검색에는 검색한 데이터를 문자열로 쿠키에저장하고 +로 구분하여 목록을 출력하도록 하고 클릭시 해당 키워드의 검색페이지로 이동하도록 구현",
              ],
            },
          },
          page2: {
            make: {
              text: [
                "로그인 페이지에서 관리자 접속이 확인되면 신고관리 페이지로 이동하도록 구현",
                "신고관리 탭에서는 신고된 게시물들의 목록과 정보가 나오도록 하고 상품정보 버튼을 누르면 해당상품을 관리자가 확인후 삭제가능하도록 구현",
                "카테고리관리에서는 미선택시 최상위카테고리를 생성할수있고 카테고리를 선택하면 그 하위에 카테고리가 생성되도록 구현함.",
                "금지키워드 목록을 불러와 확인하고 관리할수 있으며 금지키워드를 추가하여 게시글에 키워드가 포함된 게시글을 작성할 수 없게 구현",
                "신고가 10회이상 누적된 유저를 목록으로 불러와 정지하거나 해제할수 있도록 구현",
                "현재 설정된 포인트 충전 비율을 확인할수 있도록하고 설정된 비율을 변경할수 있도록 구현",
                "현재 설정된 배송비 금액을 확인할수 있고 배송비를 변경할수 있도록 구현",
                "현재 가입된 유저를 확인하고 슈퍼관리자,관리자,배송기사등의 권한을 설정할수 있도록 구현",
                "QuertClient의 invaildateQueries를 통하여 데이터를 패칭",
              ],
              sub: {
                idx: 9,
                text: [
                  "신고관리 신고목록 삭제시",
                  "금지키워드 추가시",
                  "유저정지 또는 정지 해제시",
                  "포인트 비율 변경시",
                  "배송비 변경시",
                  "유저권한 변경시",
                ],
              },
            },
          },
          page3: {
            make: {
              text: [
                "배송기사 로그인 state를 통하여 배송기사의 로그인이 확인되지 않으면 로그인 페이지를 출력하고 배송기사의 로그인이 확인되면 배송메뉴 페이지를 출력하도록 구현",
                "업무시작 및 종료를 메뉴를 통해 state를 설정하여 배송기사의 업무상태를 체크할수 있도록 구현",
                "픽업건 선택 메뉴에서 유저가 구매하여 배송대기중인 상품들의 목록의 데이터를 서버에서 전달받아 출력하고 배송기사가 픽입할 상품을 선택할수 있도록 구현",
                "픽업목록 메뉴에서는 현재 배송기사가 선택한 픽업예정상품의 목록의 정보와 현재상태를 출력하도록 구현.",
                "픽업상품 스캔,배송완료 스캔 메뉴에서 배송상품의 번호를 입력하여 서버에 저장된 상품의 현재상태를 갱신할수 있도록 구현",
              ],
            },
          },
        };
      case 3:
        return {
          idx: 3,
          img: ["yogiyo1.png", "yogiyo2.png", "yogiyo3.png", "yogiyo4.png"],
          link: "https://yogi.dsongc.com/",
          page1: {
            info: {
              date: "2024.06.13 ~ 2024.06.28(16일)",
              menber: "개인 프로젝트",
              explanation:
                "React와 tailwindcss의 사용방법을 익히기 위해 요기요 PC페이지 UI를 Typescript를 적용하여 구현해보는 프로젝트.",
            },
            works: ["프론트엔드 구현", "프로젝트 배포"],
            skills: ["TypeScript", "React", "Tailwind CSS"],
            make: {
              text: [
                "레이아웃 구현",
                "카테고리의 리스트 데이터 및 타입을 Props로 전달받아 메인페이지의 카테고리 리스트 버튼UI를 tailwind를 사용하여 구현",
                "상점리스트와 카테고리 리스트의 데이터와 타입을 Props로 전달받아 상점 리스트 페이지 UI 및 카테고리 메뉴바를  tailwind를 사용하여 구현",
                "상점의 상품목록과 리뷰 데이터와 타입을 Props로 전달받고 메뉴를 클릭하면 변경되는 state에 따라 상점페이지가 해당 메뉴의 데이터를 출력하도록 구현",
                "로그인 페이지 UI를 tailwind를 사용하여 구현",
              ],
            },
          },
        };
      case 4:
        return {
          idx: 4,
          img: ["thunder1.png", "thunder2.png", "thunder3.png", "thunder4.png"],
          link: "https://thunder.dsongc.com/",
          pagename: ["번개장터", "관리자페이지"],
          page1: {
            info: {
              date: "2024.05.19 ~ 2024.06.4(17일)",
              menber: "2인",
              explanation:
                "팀원과의 협업을 통한 프로젝트 경험과 여러 라이브러리를 사용한 서버구축 및 DB구축 경험을 위한 프로젝트입니다.",
            },
            works: [
              "API문서 ,플로우차트,시퀀스 다이어그램 등 프로젝트 문서화 및 설계",
              "요청받은 ERD대로 DB구성",
              "업무분배한 기능별 프론트엔드 및 백엔드서버 구축",
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
                "레이아웃 메뉴 구현",
                "메인페이지 슬라이드 구현",
                "번개톡 페이지 UI구현",
                "Express-session을 사용하여 로그인 로그아웃 기능구현 ",
                "Sequelize의 op.like를 사용하여 해당 키워드의 상품검색기능을 구현하고 검색결과의 최신순,오래된순등 정렬기능 구현",
                "쿼리스트링을 사용하여 카테고리를 구별하고 카테고리별로 상품리스트를 확인할수 있도록 구현 ",
                "상품페이지 접속시 해당상품의 데이터를 쿠키에 저장하여 최근에 살펴본 상품링크가 사이드바에 나타나도록 구현",
                "쿼리스트링을 사용하여 현재상품을 구별하고 해당 상품의 정보를 보여주도록 구현",
              ],
            },
          },
          page2: {
            make: {
              text: [
                "현재 가입된 유저 목록을 불러와 나타내고  검색시에는 검색된 유저만 나타내도록 구현하엿고 유저를 정지할수 있도록 구현",
                " 현재 작성된 게시글 목록을 불러와 나타내고 검색시에는 해당 게시글만 출력,게시글에 접속하여 확인하고 삭제할수 있도록 기능을 구현",
                "카테고리를 선택하여 삭제하거나 추가할수 있도록 구현 카테고리명이 중복될시에는 생성이 불가",
              ],
            },
          },
        };
      case 5:
        return {
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
        };
      default:
        return {
          idx: 1,
          img: ["pinterest1.png", "pinterest2.png", "pinterest3.png"],
          link: "https://lee.dsongc.com/",
          page1: {
            info: {
              date: "2024.08.20 ~ 2024.09.19(31일)",
              menber: "개인 프로젝트",
              explanation:
                " Next.js와 Nest.js를  자율적으로 조사 및 학습하여 구현해보는 핀터레스트 반응형 웹사이트 입니다.",
            },
            works: [
              "프로젝트 문서화 및 설계",
              ".적용할 기술에 대한 조사",
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
            ],
            make: {
              text: [
                "Next.js의 App라우팅 및 다이나믹 라우팅을 적용하여 페이지 구현",
                "로딩 및 에러 페이지 적용",
                "Session을 활용하여 로그인 기능을 구현하고 Google Oauth를 추가로 적용하여 소셜 로그인을 구현",
                "window.navigator.userAgent와 정규표현식을 사용하여 모바일 기기접속을 체크하고 모바일접속시 PC버전에서만 보이도록 설정한 사이트안내 페이지 대신 게시글 목록 페이지로 이동하도록 구현.",
                "브라우저의 너비를 체크하여 지정한 길이가 되면 해당state의 boolean값을 내보내는 커스텀훅을 작성하여 반응형 웹을 컨트롤하도록 구현",
                "Framer.motion라이브러리를 사용하여 사이트안내 페이지의 에니메이션 배너를 구현.",
                "useInfiniteQuery와 IntersectionObserver를 사용하여 무한스크롤을 구현하고 Mansoy라이브러리를 사용하여 카드형레이아웃을 정렬하도록 구현.",
                "QueryClient의 invaildateQueries를 사용하여 데이터를 패칭하도록 구현",
              ],
              sub: {
                idx: 8,
                text: ["프로필사진 변경시 ", "게시글 댓글 작성시"],
              },
            },
          },
        };
    }
  }, [project]);

  const img = useMemo(() => {
    switch (image) {
      case 0:
        return ProjectData.img[0];
      case 1:
        return ProjectData.img[1];
      case 2:
        return ProjectData.img[2];
      case 3:
        return ProjectData.img[3];
      case 4:
        return ProjectData.img[4];
      default:
        return ProjectData.img[0];
    }
  }, [image, ProjectData]);

  return (
    <ProjectComp
      animate={animate}
      setAnimate={setAnimate}
      tab={tab}
      setTab={setTab}
      view={view}
      setview={setview}
      project={project}
      setproject={setproject}
      ProjectData={ProjectData}
      ProjectName={ProjectName}
      image={image}
      setimage={setimage}
      img={img}
      Projectinfo={Projectinfo}
      setProjectinfo={setProjectinfo}
      maketext={maketext}
      setmaketext={setmaketext}
    />
  );
};
export default ProjectContainer;
