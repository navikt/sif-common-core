const commonMessagesNb = require('common/i18n/common.nb.json');
const commonMessagesNn = require('common/i18n/common.nn.json');
const validationErrorsNb = require('common/i18n/validationErrors.nb.json');
const validationErrorsNn = require('common/i18n/validationErrors.nn.json');
const pictureScanningNb = require('common/components/picture-scanning-guide/picturescanningguide.nb.json');
const pictureScanningNn = require('common/components/picture-scanning-guide/picturescanningguide.nn.json');

const bokmålstekster = {
    ...commonMessagesNb,
    ...validationErrorsNb,
    ...pictureScanningNb
};
const nynorsktekster = {
    ...commonMessagesNn,
    ...validationErrorsNn,
    ...pictureScanningNn
};

export const allCommonMessages = {
    nb: bokmålstekster,
    nn: nynorsktekster
};
