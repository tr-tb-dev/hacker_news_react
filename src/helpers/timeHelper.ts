import { IntlShape } from 'react-intl';
import { Time } from '@/enums/date';

export const formatRelativeTime = (timestamp: number | undefined, intl: IntlShape): string => {
  if (!timestamp) return '';

  const date = new Date(timestamp * Time.ONE_SECOND);
  const now = new Date();
  const diffInMilliseconds = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMilliseconds / Time.ONE_MINUTE);
  const diffInHours = Math.floor(diffInMilliseconds / Time.ONE_HOUR);
  const diffInDays = Math.floor(diffInMilliseconds / Time.ONE_DAY);

  if (diffInMinutes < 1) {
    return intl.formatMessage({ id: 'time.justNow' });
  }

  if (diffInMinutes < 60) {
    return intl.formatMessage({ id: 'time.minutesAgo' }, { minutes: diffInMinutes });
  }

  if (diffInHours < 24) {
    return intl.formatMessage({ id: 'time.hoursAgo' }, { hours: diffInHours });
  }

  return intl.formatMessage({ id: 'time.daysAgo' }, { days: diffInDays });
};
