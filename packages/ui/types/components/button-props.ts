import type { EndPoint } from 'shared/interfaces/api';
import type { RoutesNamedLocations, RoutesNamesList } from '@typed-router/__routes';
import type { Url } from 'models/domains/network';
import type { EEnvironment } from 'models/domains/theme';
import type { GlobalComponentNameIcon } from 'ui/types/components';

export interface ButtonProps {
  icon?: GlobalComponentNameIcon | Url | EndPoint;
  to?: RoutesNamesList | RoutesNamedLocations;
  selected?: boolean;
  disabled?: boolean;
  animated?: boolean;
  environment?: `${EEnvironment}`;
}
