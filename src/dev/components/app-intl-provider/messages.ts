const validationMessagesNb = require('common/i18n/validationErrors.nb.json');
const validationMessagesNn = require('common/i18n/validationErrors.nn.json');
const commonMessagesNb = require('common/i18n/common.nb.json');
const commonMessagesNn = require('common/i18n/common.nn.json');
const pictureScanningNb = require('common/components/picture-scanning-guide/picturescanningguide.nb.json');
const pictureScanningNn = require('common/components/picture-scanning-guide/picturescanningguide.nn.json');

const bokmålstekster = {
    ...validationMessagesNb,
    ...commonMessagesNb,
    ...pictureScanningNb
};
const nynorsktekster = {
    ...validationMessagesNn,
    ...commonMessagesNn,
    ...pictureScanningNn
};

export const appMessages = {
    nb: bokmålstekster,
    nn: nynorsktekster
};
