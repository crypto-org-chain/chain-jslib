import moment from 'moment';
import Long from 'long';

moment.suppressDeprecationWarnings = true;

const convertSecondsNanosToTZFormat = (seconds: Long, nanos: number): string => {
    const secondsToISO8601 = moment.unix(seconds.toNumber()).toISOString();
    const nanosToString = String(nanos);
    const tsUptoMinutes = secondsToISO8601.split('.')[0];
    const finalTimestampString = `${tsUptoMinutes}.${nanosToString}Z`;

    if (moment(finalTimestampString).isValid()) {
        return finalTimestampString;
    }
    throw new Error('Error converting timestamp.');
};

export { convertSecondsNanosToTZFormat };
