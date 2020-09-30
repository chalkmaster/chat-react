import React from "react";

export default class AvatarHelper {

  static sortAvatar() {
    const sortedPosition = Math.floor(Math.random() * 16);
    return AvatarHelper.getAvatar(sortedPosition)
  }

  static getAvatar(position: number) {
    const leftBorderAdjust = -55;
    const topBorderAdjust = -44;
    const avatarLine = Math.floor(position / 4);
    const avatarCol  = position % 4;
    const avatarPositionX = leftBorderAdjust + (avatarCol * 88) * -1;
    const avatarPositionY = topBorderAdjust + (avatarLine * 88) * -1;
    return (
      <div
        className="chat_user_avatar"
        style={
          {
            backgroundPositionX: avatarPositionX,
            backgroundPositionY: avatarPositionY,
          }
        }
      ></div>
    )
  }
}