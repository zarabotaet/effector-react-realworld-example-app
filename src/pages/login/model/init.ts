import { sample } from 'effector';
import * as user from 'features/current-user';
import { $form, $errors, formSubmitted, fieldChanged, signInFx } from './model';

formSubmitted.watch((e) => e.preventDefault());

$form.on(fieldChanged, (state, payload) => ({ ...state, ...payload }));

sample({
  source: $form,
  clock: formSubmitted,
  target: signInFx,
});

user.model.$user.on(signInFx.doneData, (_, payload) => payload);

$errors.on(signInFx.failData, (_, payload) => payload).reset(fieldChanged);
