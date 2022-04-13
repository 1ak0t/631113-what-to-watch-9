import {Quality} from './const';
import {AuthorizationStatus} from './const';

export const setQuality = (rating: number) => {
  if (rating <= 3) {
    return Quality.Bad;
  } else if (rating > 3 && rating <=5) {
    return Quality.Normal;
  } else if (rating > 5 && rating <= 8) {
    return Quality.Good;
  } else if (rating > 8 && rating < 10) {
    return Quality.VeryGood;
  } else {
    return Quality.Awesome;
  }
};

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
