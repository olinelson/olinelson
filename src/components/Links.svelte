<script>
  import { LogoGithub, LogoLinkedin, LogoTwitter } from "carbon-icons-svelte"
</script>

<section>
  <div />
  <a
    href="https://app.coracle.social/people/npub1rj70rm4vggrpcpvaukg2jpzp7qx9v9pfw5rmy9dth5fcn74y508qfekjvl/notes"
    >Nostr</a
  >
  <a
    href="https://www.linkedin.com/in/oli-nelson/"
    target="_blank"
    rel="noreferrer"><LogoLinkedin size={32} /></a
  >
  <a href="https://github.com/olinelson" target="_blank" rel="noreferrer"
    ><LogoGithub size={32} /></a
  >
  <a href="https://twitter.com/o_j_nelson" target="_blank" rel="noreferrer"
    ><LogoTwitter size={32} /></a
  >
  <a href="/resume.pdf" download target="_blank" rel="noreferrer">Resume</a>
  <div />
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr repeat(5, auto) 1fr;
    grid-gap: 1rem;
    place-items: center;
  }
</style>
