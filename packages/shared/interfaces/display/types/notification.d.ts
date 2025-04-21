import type { GlobalComponentNameIcon } from 'ui/types/components';
import type { EStatus } from 'models/interfaces/alert';

export {};

declare module 'shared/interfaces/display' {
  interface Notification {
    id: string;
    type: `${EStatus}`;
    message: string;
    duration?: number;
    delay?: number;
    icon?: GlobalComponentNameIcon;
  }

  interface DisplayNotificationsOption {
    maxElements: number;
    duration: number;
    delay: number;
  }
}