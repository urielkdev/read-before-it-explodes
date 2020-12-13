import { Chat } from "./types";

export const chats: Chat[] = [
    {
        contact: { username: 'ronald' },
        messages: [
            { username: 'ronald', message: 'hello uriel, whats up', date: '10:23' },
            { username: 'uriel', message: 'hi', date: '10:25' },
            { username: 'ronald', message: 'how old are you?', date: '10:26' },
            { username: 'ronald', message: 'are you there?', date: '10:26' },
            { username: 'ronald', message: 'hello?', date: '10:32' },
            { username: 'uriel', message: 'Lorem Ipsum is simply dummy message of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy message ever since the 1500s, when an unknown', date: '10:34' },
            { username: 'ronald', message: 'Contrary to popular belief, Lorem Ipsum is not simply random message. It has roots in a piece of clas', date: '10:35' },
            { username: 'ronald', message: 'It is a long established fact that a reader will be distracted by the readable', date: '10:42' },
            { username: 'uriel', message: 'There are many variations of passages of Lorem', date: '10:52' },
        ]
    },
    {
        contact: { username: 'matt' },
        messages: [
            { username: 'matt', message: '111111111111111', date: '23:23' },
            { username: 'uriel', message: '2222222222222222', date: '23:25' },
            { username: 'matt', message: '23333333333333333?', date: '23:26' },
            { username: 'matt', message: '4444444 4 4444 4', date: '23:26' },
            { username: 'matt', message: 'hello?', date: '23:32' },
        ]
    }
]