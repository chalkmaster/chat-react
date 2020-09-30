import React from "react";
import User from "../entities/user";
import AvatarHelper from "../helpers/avatar.helper";
import '../index.css';


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
              <div
                className="chat_userlist_user_avatar"
                style={
                  { border: `solid 3px ${AvatarHelper.sortAvatarBorderColor()}` }
                }
              >
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

function ChatMessages() {
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
        {messages.map((message: { user: User, isMe: boolean, text: string }) =>
          <li className={ message.isMe ? 'chat_message_right' : 'chat_message_left'}>
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

function ChatCommand() {
  return (
    <div className="chat_command">
      <div className="chat_command_text">
        <input type="text" />
      </div>
      <div className="chat_command_actions">
        <button onClick={() => alert('clicou')}>Enviar</button>
      </div>
    </div>
  );
}
export default class Room extends React.Component {
  render() {
    return (
      <div className="chat_room">
        <div className="chat_room_top">
          <UserList />
          <ChatMessages />
        </div>
        <ChatCommand />
      </div>
    );
  }
};