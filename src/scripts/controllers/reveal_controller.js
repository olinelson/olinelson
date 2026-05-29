import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="reveal"
// Reveals any [data-reveal] descendants as they scroll into view.
export default class extends Controller {
  connect() {
    const els = this.element.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          this.observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => this.observer.observe(el));
  }

  disconnect() {
    if (this.observer) return this.observer.disconnect();
  }
}
