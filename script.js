function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message === "") return;

  addUserMessage(message);
  input.value = "";

  setTimeout(() => {
    addBotMessage(getBotReply(message));
  }, 600);
}

function addUserMessage(text) {
  const chatBody = document.getElementById("chatBody");
  const div = document.createElement("div");
  div.className = "user-message";
  div.innerHTML = `<p>${text}</p>`;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function addBotMessage(text) {
  const chatBody = document.getElementById("chatBody");
  const div = document.createElement("div");
  div.className = "bot-message";
  div.innerHTML = `
    <img src="avatar.png" class="avatar" />
    <p>${text}</p>
  `;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotReply(message) {
  message = message.toLowerCase();

  if (message.includes("hello") || message.includes("hi")) {
    return "Hello! 😊 How can I assist you today?";
  }

  if (message.includes("product")) {
    return "We offer high-quality products with warranty and support.";
  }

  if (message.includes("order")) {
    return "Please share your order ID to check the status.";
  }

  if (message.includes("delivery")) {
    return "Delivery usually takes 3–5 business days.";
  }

  if (message.includes("payment")) {
    return "If your payment failed, please try again or use a different method.";
  }

  if (message.includes("refund") || message.includes("return")) {
    return "Refunds are processed within 5–7 working days after return approval.";
  }

  return "I will connect you to a human support agent shortly.";
}
