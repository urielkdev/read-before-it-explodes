// PROPS
export interface RegisterProps {
}

export interface LoginProps {
  setUsername: React.Dispatch<React.SetStateAction<string>>
}

export interface MainPageProps {
  username: string,
  setUsername: React.Dispatch<React.SetStateAction<string>>
}

export interface ChatProps {
  username: string,
  chat: Chat | null,
  socket: SocketIOClient.Socket
}

export interface SideMenuProps {
  contacts: Contact[]
  setSelectedChatIndex: React.Dispatch<React.SetStateAction<number | null>>,
  setUsername: React.Dispatch<React.SetStateAction<string>>
}

// GENERAL TYPES
export interface Message {
  id: string,
  username: string,
  message: string,
  time: number,
  date: string,
  opened?: boolean,
}

export interface Contact {
  username: string
}

export interface Chat {
  contact: Contact,
  messages: Message[]
}

export interface RegisterForm {
  username: string,
  password: string
}

export interface LoginForm {
  username: string,
  password: string
}
