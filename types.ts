export interface Album {
  id: string;
  title: string;
  year: string;
  coverUrl: string;
  description: string;
  spotifyUrl?: string;
}

export interface PressItem {
  id: string;
  media: string;
  quote: string;
  url?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  youtubeId: string; // Mock ID for simulation
}

export enum NavigationSection {
  HOME = 'home',
  BIO = 'bio',
  DISCOGRAPHY = 'discography',
  MULTIMEDIA = 'multimedia',
  PRESS = 'press',
  AI_TANGO = 'ai-tango',
  CONTACT = 'contact'
}