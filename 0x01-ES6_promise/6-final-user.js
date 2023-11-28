import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((data) => data.map((item) => ({ status: item.status === 'fulfilled' ? item.status : String(item.reason), value: item.value })));
}
