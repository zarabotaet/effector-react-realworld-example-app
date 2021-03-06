import { createEvent, createStore } from 'effector';
import { createBrowserHistory, Location } from 'history';

export const history = createBrowserHistory();
export const locationUpdated = createEvent<Location>();
export const $location = createStore<Location>(history.location);
export const $pathname = $location.map((x) => x.pathname);
export const $search = $location.map((x) => x.search);
