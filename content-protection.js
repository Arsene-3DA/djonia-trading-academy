(function () {
  const blockedKeys = new Set(["c", "x", "s", "u", "p"]);
  const editableSelector = "input, textarea, select, [contenteditable='true']";

  function isEditable(target) {
    return Boolean(target && target.closest && target.closest(editableSelector));
  }

  function blockEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  document.addEventListener("copy", blockEvent, true);
  document.addEventListener("cut", blockEvent, true);
  document.addEventListener("contextmenu", blockEvent, true);
  document.addEventListener("dragstart", blockEvent, true);

  document.addEventListener("selectstart", function (event) {
    if (!isEditable(event.target)) {
      blockEvent(event);
    }
  }, true);

  document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();
    const shortcutPressed = event.ctrlKey || event.metaKey;

    if (shortcutPressed && blockedKeys.has(key)) {
      blockEvent(event);
      return;
    }

    if (event.key === "F12") {
      blockEvent(event);
    }
  }, true);
})();
