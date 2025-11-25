import { Album, PressItem, VideoItem } from './types';

export const NAVIGATION_LINKS = [
  { id: 'bio', label: 'Biografía' },
  { id: 'discography', label: 'Discografía' },
  { id: 'multimedia', label: 'Multimedia' },
  { id: 'press', label: 'Prensa' },
  { id: 'ai-tango', label: 'AI Tango' },
  { id: 'contact', label: 'Clases y Contacto' },
];

export const BIO_TEXT = `
Claudia Levy es una pianista, compositora y cantante argentina que ha sabido construir un estilo propio dentro del tango actual. 
Sus composiciones se caracterizan por una fuerte impronta teatral, ironía y una mirada de género que desafía los estereotipos tradicionales del 2x4.

Desde sus comienzos, Claudia ha transitado escenarios de todo el mundo, llevando su música y su particular forma de contar historias. 
Su obra no solo respeta las raíces del género, sino que las expande, incorporando elementos contemporáneos y una narrativa visceral.
`;

export const ALBUMS: Album[] = [
  {
    id: '1',
    title: "Te quiero y me duele",
    year: "2022",
    coverUrl: "https://picsum.photos/seed/claudia1/400/400",
    description: "Una exploración íntima de las contradicciones del amor moderno con arreglos minimalistas.",
    spotifyUrl: "#"
  },
  {
    id: '2',
    title: "Mantra de los suspiros",
    year: "2018",
    coverUrl: "https://picsum.photos/seed/claudia2/400/400",
    description: "Ganador del Premio Gardel. Un disco que fusiona la milonga con texturas electrónicas sutiles.",
    spotifyUrl: "#"
  },
  {
    id: '3',
    title: "Escuchame una cosa",
    year: "2014",
    coverUrl: "https://picsum.photos/seed/claudia3/400/400",
    description: "El álbum debut que marcó su estilo irónico y teatral. Piano y voz en estado puro.",
    spotifyUrl: "#"
  }
];

export const PRESS_ITEMS: PressItem[] = [
  {
    id: 'p1',
    media: "Página/12",
    quote: "Claudia Levy rompe el molde del tango tradicional con una propuesta audaz y necesaria.",
    url: "#"
  },
  {
    id: 'p2',
    media: "Rolling Stone Arg",
    quote: "Su voz es un instrumento de narración potente, capaz de ir del susurro al grito desgarrador.",
    url: "#"
  },
  {
    id: 'p3',
    media: "Clarín",
    quote: "Una de las figuras más originales de la escena actual.",
    url: "#"
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'v1',
    title: "En Vivo en el Tasso",
    thumbnailUrl: "https://picsum.photos/seed/video1/600/340",
    youtubeId: "mock1"
  },
  {
    id: 'v2',
    title: "Videoclip Oficial - La Mentira",
    thumbnailUrl: "https://picsum.photos/seed/video2/600/340",
    youtubeId: "mock2"
  }
];
