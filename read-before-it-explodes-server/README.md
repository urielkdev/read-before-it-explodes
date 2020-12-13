Options:

*Postgres
** tables
User = id pk | username | ... ?

table UserChat = user_id (User id) pk fk | chat_id (Chat id) pk fk | contact_id fk

table Chat = id pk | message_id pk | sender_id (User id) | message (string) | date | deleted_at

** main routes
route getUser() - given `username`
    select * from user where username = `${username}` 

route getChats - given `user_id`
    select if c.sender_id = user_id then return u.username else con.username end if as sender, c.message, c.date
    from user u join user_chat uc on u.id = uc.user_id join chat c on uc.chat_id = c.id join user as con on uc.contact_id = uc.id
    where u.id = `user_id`
    where c.deleted_at is not null
    group by c.id
    order by date

    /\ Review, create a structure like: 
    ```
    {
        chats: [
            {
                contact: { username: string },
                messages: [
                    {
                        username: string,
                        message: string,
                        date: string
                    },
                    ...
            }
        ],
            ...
        ]
    }
    ```

*MongoDB () ? review later
    user_id
    |---username
    |---chat   (duplicated ? review, maybe separate the user and the chat)
        |---message
        |---sender
        |---date
        |---deleted_at