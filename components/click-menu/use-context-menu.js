import React from "react";

const useContextMenu = () => {
  const [xPos, setXPos] = React.useState("0px");
  const [yPos, setYPos] = React.useState("0px");
  const [showMenu, setShowMenu] = React.useState(false);

  const handleContextMenu = React.useCallback(
    (e) => {
      if (document.getElementById("sheet-box").contains(e.target)) {
        if (!e.shiftKey || !e.ctrlKey) {
          e.preventDefault();
        }

        setXPos(`${e.pageX}px`);
        setYPos(`${e.pageY + 10}px`);
        setShowMenu(true);
      }
    },
    [setXPos, setYPos]
  );

  const handleClick = React.useCallback(() => {
    showMenu && setShowMenu(false);
  }, [showMenu]);

  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.addEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return { xPos, yPos, showMenu };
};

export default useContextMenu;
