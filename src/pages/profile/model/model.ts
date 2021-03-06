import { createEvent, createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as types from './types';

export const toggleFollowing = createEvent<React.MouseEvent>();

export const getProfileFx = createEffect((username: string) =>
  api
    .get<types.GetProfileFxDone>(`/profiles/${username}`)
    .then<types.Profile>((x) => x.profile),
);

export const followUserFx = createEffect((username: string) =>
  api
    .post<types.GetProfileFxDone>(`/profiles/${username}/follow`)
    .then<types.Profile>((x) => x.profile),
);

export const unfollowUserFx = createEffect((username: string) =>
  api
    .del<types.GetProfileFxDone>(`/profiles/${username}/follow`)
    .then<types.Profile>((x) => x.profile),
);

export const PageGate = createGate<types.PageGateType>();

export const $username = createStore<string>('');
export const $profile = createStore<types.Profile>({
  bio: '',
  following: false,
  image: '',
  username: '',
});

export const $following = $profile.map((x) => x.following);
export const $follow = $profile.map((x) => x.following === true);
export const $unfollow = $profile.map((x) => x.following === false);
