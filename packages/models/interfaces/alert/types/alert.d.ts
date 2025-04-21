export {};

type DisplayStatus = 'error' | 'success' |'none';

declare module 'models/interfaces/alert' {
  interface StatusMessage {
    display: DisplayStatus;
    content?: string;
    title?: string;
  }
}