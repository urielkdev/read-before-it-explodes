export interface Message {
    username: string,
    message: string,
    date: string
}

export interface Contact {
    username: string
}

export interface Chat {
    contact: Contact,
    messages: Message[]
}

