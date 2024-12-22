import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    error: false,
    submitted: false,
  }

  static targets = ["message", "email", "fieldset", "form", "success"]

  errorMessage = "Something went wrong, please try again later."

  connect() {
    this.formTarget.addEventListener("submit", (e) => this.handleSubmit(e))
  }

  disconnect() {
    this.formTarget.removeEventListener("submit", (e) => this.handleSubmit(e))
  }

  async handleSubmit(e) {
    console.log("HANDLING SUBMIT", e)
    e.preventDefault()
    const body = new FormData(this.formTarget)
    const url = this.formTarget.action
    try {
      const res = await fetch(url, { method: "POST", body })
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      console.log(res)
      this.errorValue = false
      this.submittedValue = true
    } catch (error) {
      this.errorValue = true
      console.error(`Error submitting form:`, error)
    }
  }

  errorValueChanged(error) {
    if (!error) return
    this.fieldsetTarget.ariaInvalid = !!error
    this.emailTarget.ariaInvalid = !!error
    this.messageTarget.innerText = this.errorMessage
  }

  submittedValueChanged(submitted) {
    console.log("SUBMITTED", submitted)
    if (submitted) {
      this.formTarget.style.display = "none"
      this.successTarget.style.display = "flex"
      return
    }

    this.formTarget.style.display = "block"
    this.successTarget.style.display = "none"
  }
}
