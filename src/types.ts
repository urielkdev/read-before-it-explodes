export interface ChatProps { menuItem: string | null }

export interface SideMenuProps { setMenuItem: (menuItem: string) => void }

export interface Message {
    me: boolean,
    text: string
}