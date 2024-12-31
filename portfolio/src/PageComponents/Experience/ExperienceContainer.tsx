import ExperienceComp from "./ExperienceComp";

export interface IExperienceData {
  title: string;
  content: string[];
  detail?: {
    title: string;
    content: string[];
    subDetail?: {
      title: string;
      content: string[];
    };
  }[];
}

interface IProps {
  ExperienceRef: React.RefObject<HTMLDivElement>;
}

const ExperienceContainer = ({ ExperienceRef }: IProps) => {
  const data: IExperienceData[] = [
    {
      title: "1.프로젝트 유지보수의 효율화를 위한 CI/CD 파이프라인 구축",
      content: [
        "Next.js 프로젝트를 배포하면서 수정사항이 생길 때마다 다시 빌드하여 재배포하는 방식이 비효율적이라고 생각했습니다.",
        "이를 개선하기위해 수정사항을 즉각적으로 배포된 프로젝트에 적용할 수 있도록 하는 방법을 탐색하게 되었습니다.",
      ],
      detail: [
        {
          title: "해결방안",
          content: [
            "GitHub Actions를 사용하여 EC2에 새로 빌드된 프로젝트를 자동으로 배포하는 CI/CD 파이프라인을 구축",
          ],
        },

        {
          title: "배포 환경 설정",
          content: [
            "AWS의 EC2 보안그룹의 22번 포트 설정",
            "Actions의 시크릿 설정",
            "host,key,.env의 데이터 등 Actions 실행시 숨김처리가 필요한 데이터",
          ],
        },
        {
          title: "YML 파일 작성",
          content: [
            "트리거 설정 및 작업 설정",
            "git Repository의 코드 변경점 체크",
            "SSH 키관리 및 호스트 관리: GitHub Actions의 서버의 .ssh 폴더에 ssh키값과 호스트등의 정보 저장 ",
            "git Actions 서버에서 .env 또는 config 파일을 생성 후 패키지의 의존성을 설치하고 프로젝트 빌드",
            "rsync 를 통해서 22번 포트로  빌드 파일 및 필수 파일등을 EC2에 배포하도록 요청",
            "EC2 nvm 환경여부 확인후 설치 및 pm2 설치요청",
            "EC2 내부의 프로젝트 폴더에서 패키지 의존성을 설치하고  pm2 실행 및 프로젝트를 실행하도록 요청",
          ],
        },
        {
          title: "아쉬운점",
          content: [
            "AWS CLI를 사용하지 않고 EC2에 직접 접근하여 요청.",
            "배포전략에서 무중단 배포에대한 내용을 고려하지 못함.",
          ],
        },
      ],
    },
    {
      title: "2.AWS 배포시 발생한 문제해결",
      content: [
        "1.GitHub Actions를 통하여 프로젝트를자동적으로 배포하는 도중에 EC2가 정지해버리는 문제가발생하엿습니다.",
        "해당 문제는 고용량의 이미지 때문에 프리티어 EC2에 배정된 RAM용량을 초과하는 하는것이 원인으로 판단하엿습니다.",
        "2.여러 프로젝트를 각각의 EC2를 통하여 배포하게 되면서 여러EC2사용에따라 발생하는 비용적인 문제",
      ],
      detail: [
        {
          title: "해결 방안",
          content: [
            "프리티어 EC2에 배정되어있는 RAM의 용량이 제한되어있어 EC2에 스왑메모리 설정을 통해서 EC2가 과부화 되어 정지하는일을 방지하엿습니다.",
            "여러 EC2의 프로젝트를 하나의 EC2로 통합하고 서브도메인을 통하여 하나의 EC2에서 여러프로젝트를 관리하는 형태로 계획하여 필요한 조치들을 수행하엿습니다.",
          ],
          subDetail: {
            title: "조치 사항",
            content: [
              "여러프로젝트를 관리하기위해 사용할 EC2의 하드디스크 용량을 EC2볼륨 설정을 통하여 확장",
              "모든 프로젝트가 지정된 하나의 EC2에서 작동하도록 설정",
              "Route53의 도메인의 호스팅 영역의 레코드상에 서브도메인을 생성",
              "Nginx를 통하여 리버스 프록시를 구축하고 서브도메인에 따라 해당 프로젝트의 서버로 연결되도록 설정",
            ],
          },
        },
      ],
    },
    {
      title: "3.이미지 로딩시의 사용자 경험 개선",
      content: [
        "React 프로젝트에서 스크롤의 일정 위치에 도달했을 때 DOM 요소가 화면 상단에 닿으면 상태값을 변화시켜 이미지 목록을 표시하는 기능을 구현하엿습니다.",
        "이미지가 사용자가 이용하는 시점에 제대로 로딩이 완료되지않아 사용자 경험 부정적인 영향을 주었습니다.",
        "해당문제의 원인은 상태값 변화 후 DOM 요소가 먼저 표시되고, 이미지 로딩이 그 이후에 이루어지는 구조에서 문제가 발생하는것으로 판단하엿습니다.",
      ],
      detail: [
        {
          title: "해결방안",
          content: [
            "이미지 로딩 타이밍을 생성시점이아니라 뷰포트에 들어오는 시점으로 앞당기는 Lazy Loading 기법을 적용",
          ],
        },
      ],
    },
    {
      title: "4.애니메이션 동작의 문제해결",
      content: [
        "지정된 속도로 한쪽으로 흘러가는 애니메이션을 구현하면서 마우스를 올리면 애니메이션이 정지하고, 마우스를 떼면 마지막 위치에서 이어서 재생되도록 설정했습니다.",
        "애니메이션이 정지된 후 반복될수록 점차 느려지는 현상이 발생.",
        "duration속성에 의해 애니메이션 속도가 조절되는데, 애니메이션을 재실행할 때마다 전체 길이가 변경되면서 속도가 점차 느려지는 것으로 파악되었습니다.",
      ],
      detail: [
        {
          title: "해결방안",
          content: [
            "이를 해결하기 위해, 애니메이션 길이에 따른 duration 값을 동적으로 계산하여, 애니메이션 속도가 일정하게 유지되도록 수정했습니다.",
          ],
        },
      ],
    },
  ];
  return <ExperienceComp ExperienceRef={ExperienceRef} data={data} />;
};
export default ExperienceContainer;
