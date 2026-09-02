import { Controller } from '@hotwired/stimulus'

const YEAR = 365.2425 * 24 * 60 * 60 * 1000

export default class extends Controller {
  static values = { start: String, decimals: { type: Number, default: 8 } }

  connect() {
    this.tick()
    this.timer = setInterval(() => this.tick(), 1000)
  }

  disconnect() {
    clearInterval(this.timer)
  }

  tick() {
    const years = (Date.now() - Date.parse(this.startValue)) / YEAR
    this.element.textContent = years.toFixed(this.decimalsValue)
  }
}
