// TODO: form 제출 시 id도 함께 제출하도록 변경

import { backEndAddress } from "./global.js";
import { paintTOC } from "./paintTOC.js";

const _createButton = document.querySelector(".create-button");
const _contentForm = document.querySelector(".content-form");

const state = {
  formOpen: false,
};

function handleButtonOpen() {
  state.formOpen = true;

  const form = document.createElement("form");
  const header = document.createElement("h3");
  const input = document.createElement("input");
  const textarea = document.createElement("textarea");
  const submit = document.createElement("input");

  // form props 설정
  form.classList.add("create-form");
  form.setAttribute("action", `${backEndAddress}/api/content/create`);
  form.setAttribute("method", "post");
  form.addEventListener("submit", (event) => paintTOC());
  // header props 설정
  header.innerText = "Create-Form";
  // input props 설정
  input.classList.add("form-title");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Title");
  input.setAttribute("required", "");
  input.setAttribute("name", "title");
  // textarea props 설정
  textarea.classList.add("form-description");
  textarea.setAttribute("placeholder", "Description");
  textarea.setAttribute("required", "");
  textarea.setAttribute("name", "description");
  // submit props 설정
  submit.classList.add("form-submit");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "submit");

  form.appendChild(header);
  form.appendChild(input);
  form.appendChild(document.createElement("br"));
  form.appendChild(textarea);
  form.appendChild(document.createElement("br"));
  form.appendChild(submit);
  _contentForm.appendChild(form);
}

function handleButtonClose() {
  state.formOpen = false;
  const form = document.querySelector(".create-form");
  form.remove();
}

export function createContent() {
  _createButton.addEventListener("click", () => {
    if (state.formOpen) {
      handleButtonClose();
    } else {
      handleButtonOpen();
    }
  });
}