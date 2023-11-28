import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()])
    .then((data) => console.log(`${data[0].firstName} ${data[0].lastName}`));
}
