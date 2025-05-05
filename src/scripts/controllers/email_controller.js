import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="email"
export default class extends Controller {
  static values = {
    status: String,
  };

  static targets = ["button"];

  async submit() {
    const formData = new FormData(this.element);
    this.statusValue = "submitting";
    const res = await fetch(this.element.action, {
      method: "POST",
      body: formData,
    });
    if (res.ok) this.statusValue = "submitted";
    else this.statusValue = "error";
  }

  statusValueChanged(status) {
    if (status == "submitting") {
      this.buttonTarget.ariaBusy = true;
      this.buttonTarget.disabled = true;
    } else {
      this.buttonTarget.ariaBusy = false;
      this.buttonTarget.disabled = false;
    }
  }
}
