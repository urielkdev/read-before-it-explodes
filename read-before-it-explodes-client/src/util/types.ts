export interface ChatProps {
    username: string,
    chat: Chat | null,
    socket: SocketIOClient.Socket
}

export interface SideMenuProps {
    contacts: Contact[]
    setSelectedContactIndex: (index: number) => void
}

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