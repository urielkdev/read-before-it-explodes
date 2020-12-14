// PROPS
export interface LoginProps {
  setUsername: React.Dispatch<React.SetStateAction<string>>
}

export interface MainPageProps {
  username: string
}

export interface ChatProps {
  username: string,
  chat: Chat | null,
  socket: SocketIOClient.Socket
}

export interface SideMenuProps {
  contacts: Contact[]
  setSelectedChatIndex: (index: number) => void
}


// GENERAL TYPES
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
