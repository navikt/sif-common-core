import React from 'react';
import './systemInformationMessage.less';

interface Props {
    message: string;
}

const SystemInformationMessage = ({ message }: Props) => <div className="systemInformationMessage">{message}</div>;

export default SystemInformationMessage;
