export interface Message {
  id: string,
  username: string,
  message: string,
  time: number,
  date: string,
  opened: boolean
}

export interface Contact {
  username: string
}

export interface Chat {
  contact: Contact,
  messages: Message[]
}



// Socket params interfaces

export interface SocketSendMessage {
  to: string,
  message: Message
}