import { $user, $token, loggedOutClicked } from './model';

$user.reset(loggedOutClicked);
$token.catch(console.error).on($user, (_, { token }) => token);
