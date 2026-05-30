import { Controller } from '@hotwired/stimulus'

// Fires a Plausible custom event whenever a mailto: link is clicked anywhere on
// the page, so email leads show up as a goal in analytics. Delegated from <body>.
export default class extends Controller {
  track(event) {
    const link = event.target.closest('a[href^="mailto:"]')
    if (!link) return
    const location = link.dataset.leadSource || 'unknown'
    window.plausible?.('Lead: Email', { props: { source: location } })
  }
}
