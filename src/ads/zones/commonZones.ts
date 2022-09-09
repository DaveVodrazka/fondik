import { ZoneElementMap } from '../../types/ads';
import { zoneMap } from './sznZones';

export const getZoneElementMap = (): ZoneElementMap =>
	new Map(Array.from(zoneMap, ([k, v]) => [k, document.getElementById(v.id)]));
