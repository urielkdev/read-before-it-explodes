import { Chat } from "./types"

export const chats: { [key: string]: Chat[] } =
{
  'uriel': [
    {
      contact: { username: 'ronald' },
      messages: [
        { id: '0', username: 'ronald', message: 'hello uriel, whats up', time: 5, date: '10:23', opened: false },
        { id: '1', username: 'uriel', message: 'hi', time: 3, date: '10:25', opened: false },
        { id: '2', username: 'ronald', message: 'how old are you?', time: 5, date: '10:26', opened: false },
        { id: '3', username: 'ronald', message: 'are you there?', time: 5, date: '10:26', opened: false },
        { id: '4', username: 'ronald', message: 'hello?', time: 3, date: '10:32', opened: false },
        { id: '5', username: 'uriel', message: 'Lorem Ipsum is simply dummy message of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy message ever since the 1500s, when an unknown', time: 5, date: '10:34', opened: false },
        { id: '6', username: 'ronald', message: 'Contrary to popular belief, Lorem Ipsum is not simply random message. It has roots in a piece of clas', time: 5, date: '10:35', opened: false },
        { id: '7', username: 'ronald', message: 'It is a long established fact that a reader will be distracted by the readable', time: 5, date: '10:42', opened: false },
        { id: '8', username: 'uriel', message: 'There are many variations of passages of Lorem', time: 5, date: '10:52', opened: false },
      ]
    }
  ],
  'ronald': [
    {
      contact: { username: 'uriel' },
      messages: [
        { id: '0', username: 'ronald', message: 'hello uriel, whats up', time: 5, date: '10:23', opened: false },
        { id: '1', username: 'uriel', message: 'hi', time: 3, date: '10:25', opened: false },
        { id: '2', username: 'ronald', message: 'how old are you?', time: 5, date: '10:26', opened: false },
        { id: '3', username: 'ronald', message: 'are you there?', time: 5, date: '10:26', opened: false },
        { id: '4', username: 'ronald', message: 'hello?', time: 3, date: '10:32', opened: false },
        { id: '5', username: 'uriel', message: 'Lorem Ipsum is simply dummy message of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy message ever since the 1500s, when an unknown', time: 5, date: '10:34', opened: false },
        { id: '6', username: 'ronald', message: 'Contrary to popular belief, Lorem Ipsum is not simply random message. It has roots in a piece of clas', time: 5, date: '10:35', opened: false },
        { id: '7', username: 'ronald', message: 'It is a long established fact that a reader will be distracted by the readable', time: 5, date: '10:42', opened: false },
        { id: '8', username: 'uriel', message: 'There are many variations of passages of Lorem', time: 5, date: '10:52', opened: false },
      ]
    }
  ]
}