import { NavLink, RoutePath, ProjectItem, ExhibitionItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'About NAGY', path: RoutePath.ABOUT },
  { label: 'Works', path: RoutePath.WORKS },
  { label: 'Picture Books', path: RoutePath.BOOKS },
  { label: 'Project', path: RoutePath.PROJECTS },
  { label: 'Exhibitions', path: RoutePath.EXHIBITIONS },
  { label: 'Contact', path: RoutePath.CONTACT },
];

export const HERO_IMAGES = [
  'https://picsum.photos/1920/1080?random=1&grayscale', // Moody
  'https://picsum.photos/1920/1080?random=2&blur=2',   // Abstract
  'https://picsum.photos/1920/1080?random=3',           // Nature
];

export const HERO_MESSAGE = "손끝의 온기와 AI의 몽환이 만나 짓는 세계";

export const WORKS_DATA: ProjectItem[] = [
  {
    id: 'w1',
    title: 'Silent Whisper',
    category: 'Digital Art',
    year: '2024',
    description: '밤의 숲이 들려주는 침묵의 소리를 시각화한 작업. 펜 드로잉의 거친 질감 위에 AI가 생성한 빛의 입자를 덧입혀 완성했습니다.',
    imageUrl: 'https://picsum.photos/800/1000?random=10',
    tags: ['Mixed Media', 'AI Gen', 'Ink'],
  },
  {
    id: 'w2',
    title: 'Dream Architect',
    category: 'Fine Art',
    year: '2023',
    description: '무의식 속에서 구축되는 꿈의 건축물들. 불가능한 공간을 현실의 종이 위에 구현합니다.',
    imageUrl: 'https://picsum.photos/800/600?random=11',
    tags: ['Digital Painting', 'Surrealism'],
  },
  {
    id: 'w3',
    title: 'Memory Fragments',
    category: 'Archive',
    year: '2023',
    description: '흩어진 기억의 조각을 모아 하나의 풍경으로 재구성하는 실험적 프로젝트.',
    imageUrl: 'https://picsum.photos/800/800?random=12',
    tags: ['Collage', 'Memory'],
  },
  {
    id: 'w4',
    title: 'Blue Horizon',
    category: 'Digital Art',
    year: '2024',
    description: '경계가 없는 수평선 너머의 세계. 차가움 속에 숨겨진 온기를 탐구합니다.',
    imageUrl: 'https://picsum.photos/800/1200?random=13',
    tags: ['Blue', 'Horizon'],
  }
];

export const BOOKS_DATA: ProjectItem[] = [
  {
    id: 'b1',
    title: '구름을 걷는 아이',
    category: 'Picture Book',
    year: '2024',
    description: '손그림 캐릭터와 AI 배경이 어우러진 판타지 동화. 잃어버린 구름을 찾아 떠나는 여정을 담았습니다.',
    imageUrl: 'https://picsum.photos/600/800?random=20',
    tags: ['Publishing', 'Kids'],
  },
  {
    id: 'b2',
    title: '기계 정원의 오후',
    category: 'Art Book',
    year: '2023',
    description: '차가운 기계와 따뜻한 식물이 공존하는 정원 이야기. 성인을 위한 힐링 그림책.',
    imageUrl: 'https://picsum.photos/600/800?random=21',
    tags: ['Art Book', 'Illustration'],
  }
];

export const EXHIBITIONS_DATA: ExhibitionItem[] = [
  {
    id: 'e1',
    title: '경계의 온도 (The Temperature of Boundary)',
    gallery: 'Seongsu Art Space',
    date: '2024. 04. 12 - 2024. 05. 30',
    location: 'Seoul, Korea',
    type: 'Solo',
  },
  {
    id: 'e2',
    title: 'Digital Brushes: New Wave',
    gallery: 'DDP Design Hall',
    date: '2023. 11. 01 - 2023. 11. 15',
    location: 'Seoul, Korea',
    type: 'Group',
  },
  {
    id: 'e3',
    title: 'Dream Scape Project',
    gallery: 'Online Metaverse Gallery',
    date: '2023. 06. 01 - Open Run',
    location: 'Global',
    type: 'Project',
  },
];
