export interface Message{
    message_id: number,
    from: {
        id: number,
        is_bot: boolean,
        first_name: string,
        last_name: string,
        username: string,
        language_code: 'ru'
    },
    chat: {
        id: number,
        first_name: string,
        last_name: string,
        username: string,
        type: 'private'
    },
    date: number,
    text: string,
}