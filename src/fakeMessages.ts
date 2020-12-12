import { Contact } from "./types";


export const contacts: Contact[] = [
    {
        username: 'ronald',
        messages: [
            { me: false, text: 'hello uriel, whats up', date: '10:23' },
            { me: true, text: 'hi', date: '10:25' },
            { me: false, text: 'how old are you?', date: '10:26' },
            { me: false, text: 'are you there?', date: '10:26' },
            { me: false, text: 'hello?', date: '10:32' },
            { me: true, text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown', date: '10:34' },
            { me: false, text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of clas', date: '10:35' },
            { me: false, text: 'It is a long established fact that a reader will be distracted by the readable', date: '10:42' },
            { me: true, text: 'There are many variations of passages of Lorem', date: '10:52' },
        ]
    },
    {
        username: 'matt',
        messages: [
            { me: false, text: '111111111111111', date: '23:23' },
            { me: true, text: '2222222222222222', date: '23:25' },
            { me: false, text: '23333333333333333?', date: '23:26' },
            { me: false, text: '4444444 4 4444 4', date: '23:26' },
            { me: false, text: 'hello?', date: '23:32' },
        ]
    }
]