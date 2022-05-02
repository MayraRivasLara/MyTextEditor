const butInstall = document.getElementById("buttonInstall");

// Installing the PWA -- Event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Storing the triggered events.
  window.deferredPrompt = event;

  // Removing the hidden class form the button.
  butInstall.classList.toggle("hidden", false);
});

// Click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  // Show prompt
  promptEvent.prompt();

  // Can only be used once.
  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// Handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // Clear prompt
  window.deferredPrompt = null;
});
