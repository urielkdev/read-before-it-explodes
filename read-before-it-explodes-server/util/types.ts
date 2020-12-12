export interface Message {
    me: boolean,
    text: string,
    date: string
}

export interface Contact {
    username: string,
    messages: Message[]
}