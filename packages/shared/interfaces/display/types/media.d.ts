
export {};

declare module 'shared/interfaces/display' {
  type ScreenMedia = 'mobile' | 'tablet' | 'desktop';
  type ResolutionMedia = 'HD' | 'WXGA' | 'WXGA2' | 'FHD' | 'QHD' | 'UHD' | 'SVGA' |'QVGA';
  type MediaKey = ScreenMedia | ResolutionMedia;
}
