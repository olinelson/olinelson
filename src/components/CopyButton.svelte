<script lang="ts">
  import Copy from "carbon-icons-svelte/lib/Copy.svelte"
  import CheckmarkOutline from "carbon-icons-svelte/lib/CheckmarkOutline.svelte"
  import { fade } from "svelte/transition"

  export let text: string

  let copied = false
  function copyText() {
    navigator.clipboard.writeText(text)
    copied = true
  }
</script>

<button on:click={copyText} class="outline" role="button">
  {#if copied}
    <span transition:fade>
      <CheckmarkOutline />
    </span>
  {:else}
    <Copy />
  {/if}
</button>
