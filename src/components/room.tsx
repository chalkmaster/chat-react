import React from "react";
import User from "../entities/user";
import AvatarHelper from "../helpers/avatar.helper";

function UserList() {
  const users = [
    new User('Joe', AvatarHelper.sortAvatar()),
    new User('Maria', AvatarHelper.sortAvatar()),
    new User('Mathew', AvatarHelper.sortAvatar()),
    new User('Chalk', AvatarHelper.sortAvatar()),
  ];

  return (
    <div className="chat_userlist">
      <ul>
        {users.map((user: User) =>
          <li className="chat_userlist_user">
            <div>
              <div className="chat_userlist_user_avatar">
                {user.avatar}
              </div>
              <span className="chat_userlist_user_nick">
                {user.nick}
              </span>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}

function chatMessages() {
  const messages = [
    {
      user: new User('Chalk', AvatarHelper.sortAvatar()),
      isMe: true,
      text: 'hi',
    },
    {
      user: new User('Mathew', AvatarHelper.sortAvatar()),
      isMe: false,
      text: 'hello',
    },
  ];
  return (
    <div className="chat_messages">
      <ul>
        {messages.map((message: {user:User, isMe:boolean, text:string}) =>
          <li className={"chat_message_" + message.isMe ? 'right' : 'left'}>
            <div className="chat_message_avatar">
              {message.user.avatar}
            </div>
            <div className="chat_message_text">
              {message.text}
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
export default class Room {
  render() {
    return (
      <UserList />

    );
  }
};