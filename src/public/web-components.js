///////////////////// Toast web component //////////////////////
const template = document.createElement("template")
template.innerHTML = `
<style>
#simpleToast {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: MediumVioletRed; /* Background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 999999; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 30px; /* 30px from the bottom */
  font-family: monospace;
  display: inline-flex;
  line-hight: 12px;
  border-radius: 0.4rem;
}
#simpleToast span {
  margin-left: 12px;
  margin-top: 2px;
}

#simpleToast[data-type="info"] {
  background-color: #216aa9;
}
#simpleToast[data-type="warning"] {
  color: black;
  background-color: yellow;
}
#simpleToast[data-type="danger"] {
  background-color: #de5454;
}
#simpleToast[data-type="success"] {
    background-color: #5cb85c;
}

#simpleToast.show {
  visibility: visible;
  animation: fadein 0.5s;
}
#simpleToast:not(.show) {
  visibility: hidden;
  animation: fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>
<div id="simpleToast">
  <div id="toastBody">The notification message...</span>
</div>
`

class Toast extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }
    openToast({ content, type, time }) {
        const shadowRoot = document.querySelector('toast-component').shadowRoot;
        this.toast = shadowRoot.querySelector("#simpleToast");
        this.toast.className = "show";
        this.toast.setAttribute('data-type', type || '')
        this.toastBody = shadowRoot.querySelector("#toastBody");
        this.toastBody.innerHTML = content;
        clearTimeout(this.countdown)
        this.countdown = setTimeout(() => {
            this.toast.className = this.toast.className.replace("show", "");
            clearTimeout(this.countdown)
        }, time || 3000);
    }
}
customElements.define('toast-component', Toast);
window.ToastWc = {
    show: ({ content, type, time }) => {
        document.querySelector('toast-component').openToast({ content, type, time })
    }
}