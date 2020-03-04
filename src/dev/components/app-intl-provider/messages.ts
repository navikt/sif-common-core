const validationMessagesNb = require('common/i18n/validationErrors.nb.json');
const validationMessagesNn = require('common/i18n/validationErrors.nn.json');
const ferieMessagesNb = require('common/forms/ferieuttak/ferieuttak.nb.json');
const ferieMessagesNn = require('common/forms/ferieuttak/ferieuttak.nn.json');
const utenlandsoppholdNb = require('common/forms/utenlandsopphold/utenlandsopphold.nb.json');
const utenlandsoppholdNn = require('common/forms/utenlandsopphold/utenlandsopphold.nn.json');
const bostedUtlandNb = require('common/forms/bosted-utland/bostedUtland.nb.json');
const bostedUtlandNn = require('common/forms/bosted-utland/bostedUtland.nn.json');
const commonMessagesNb = require('common/i18n/common.nb.json');
const commonMessagesNn = require('common/i18n/common.nn.json');
const pictureScanningNb = require('common/components/picture-scanning-guide/picturescanningguide.nb.json');
const pictureScanningNn = require('common/components/picture-scanning-guide/picturescanningguide.nn.json');

const bokmålstekster = {
    ...validationMessagesNb,
    ...ferieMessagesNb,
    ...utenlandsoppholdNb,
    ...bostedUtlandNb,
    ...commonMessagesNb,
    ...pictureScanningNb
};
const nynorsktekster = {
    ...validationMessagesNn,
    ...ferieMessagesNn,
    ...utenlandsoppholdNn,
    ...bostedUtlandNn,
    ...commonMessagesNn,
    ...pictureScanningNn
};

export const appMessages = {
    nb: bokmålstekster,
    nn: nynorsktekster
};
