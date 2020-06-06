import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { AlertStripeAdvarsel } from 'nav-frontend-alertstriper';
import { fileSizeIsValid } from 'common/utils/attachmentUtils';
import prettyBytes from 'pretty-bytes';

interface Props {
    filesThatDidntGetUploaded: File[];
}

const FileUploadErrors: React.FunctionComponent<Props> = ({ filesThatDidntGetUploaded }: Props) => {
    if (filesThatDidntGetUploaded.length === 0) {
        return null;
    }

    return (
        <AlertStripeAdvarsel>
            <FormattedMessage id="fileUploadErrors.part1" />
            <ul>
                {filesThatDidntGetUploaded.map(({ name, size, type }) => {
                    return (
                        <li key={name}>
                            {name}
                            {type}
                            {size && !fileSizeIsValid(size) && (
                                <div style={{ fontSize: '0.9rem' }}>
                                    Fila er for stor ({prettyBytes(size)}). Maks filstørrelse er {prettyBytes(8000000)}.
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </AlertStripeAdvarsel>
    );
};

export default FileUploadErrors;
