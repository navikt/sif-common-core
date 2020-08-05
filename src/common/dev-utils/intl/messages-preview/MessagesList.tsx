import React from 'react';
import { createMultiLocaleObject, MessageFileFormat } from '../devIntlUtils';
import './messagesList.less';

interface Props {
    messages: MessageFileFormat;
}

const MessagesList = ({ messages }: Props) => {
    const allMessages = createMultiLocaleObject(messages);
    return (
        <table className="messageList">
            <thead>
                <tr>
                    <th>Kode</th>
                    <th>Bokmål</th>
                    <th>Nynorsk</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(allMessages).map((key) => {
                    return (
                        <tr key={key}>
                            <th>
                                <code>{key}</code>
                            </th>
                            {Object.keys(allMessages[key]).map((locale) => {
                                const value = allMessages[key][locale];
                                return (
                                    <td key={locale} className={value ? '' : 'missingText'}>
                                        {value}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default MessagesList;
