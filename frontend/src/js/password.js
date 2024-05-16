const showPasswordBtn = document.querySelector(".show-password");
showPasswordBtn.addEventListener("click", () => {
    const input = showPasswordBtn.parentElement.querySelector("input");
    if (input.type === "password") {
      input.type = "text";
      showPasswordBtn.innerHTML = ` <i class="change-username__input-icon fa-solid fa-eye-slash"></i>`;
    } else {
      input.type = "password";
      showPasswordBtn.innerHTML = ` <i class="change-username__input-icon fa-solid fa-eye"></i>`;
    }
  })
