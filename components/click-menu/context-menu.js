import React from "react";
import useContextMenu from "./use-context-menu";
import { Motion } from "react-motion";


// Sculpted from:  https://www.pluralsight.com/guides/how-to-create-a-right-click-menu-using-react
const ContextMenu = ({ children }) => {
  const { xPos, yPos, showMenu } = useContextMenu();

  return (
    <Motion
      defaultStyle={{ opacity: 0 }}
      style={{
        opacity: showMenu ? 1 : 0,
      }}
    >
      {(interpolatedStyle) => (
        <>
          {showMenu ? (
            <div
              className="menu-container"
              style={{
                position: "absolute",
                top: yPos,
                left: xPos,
                opacity: interpolatedStyle.opacity,
              }}
            >
              {children}
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </Motion>
  );
};

export default ContextMenu;
