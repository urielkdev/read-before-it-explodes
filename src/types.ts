export interface ChatProps {
    contacts: Contact[],
    selectedContactIndex: number | null
}

export interface SideMenuProps {
    contacts: Contact[]
    setSelectedContactIndex: (index: number) => void
}

export interface Message {
    me: boolean,
    text: string,
    date: string
}

export interface Contact {
    username: string,
    messages: Message[]
}