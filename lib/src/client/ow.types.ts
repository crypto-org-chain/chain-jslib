import ow from 'ow';

export const owUrl = ow.string.validate((val) => ({
    validator: val.startsWith('http://') || val.startsWith('https://'),
    message: (label) => `Expected ${label} to be an url, got \`${val}\``,
}));
