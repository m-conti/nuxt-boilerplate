import type { Values as GaTrackValues } from './ga-track';

export interface Injections {
  vGaTrack: DirectiveFunction<GaTrackValues>;
  vActiveOnClick: DirectiveFunction<void>;
}
