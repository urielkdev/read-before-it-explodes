import { Chat } from "./types"

export const chats: { [key: string]: Chat[] } =
{
    'uriel': [
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
        }
    ],
    'ronald': [
        {
            contact: { username: 'uriel' },
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
        }
    ]
}