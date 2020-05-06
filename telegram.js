window.onload = () => {
  const timer = setInterval(() => {
    const messages = document.querySelectorAll(".im_dialogs_wrap ul li");
    if (messages.length > 0) {
      clearInterval(timer);
      remove();
    }
  }, 100);
  const remove = () => {
    const joined_messages = document.querySelectorAll(
      ".im_dialogs_wrap span[ng-switch-when='messageActionCustomAction']"
    );
    for (var i = 0, message; (message = joined_messages[i]); i++) {
      const message_node =
        message.parentElement.parentElement.parentElement.parentElement
          .parentElement.parentElement.parentElement;
      message_node.remove();
    }
  };
};
