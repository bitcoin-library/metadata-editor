<script>
  import { tick } from 'svelte'

  export let toggleOnce = false
  export let relative = true

  let active = false

  async function click() {
    if (toggleOnce) {
      active = !active
      return
    }

    active = false
    await tick();
    active = true
  }
</script>



<button on:click={click} class:relative class="btn">
  <slot name="label" />

  {#if active}
    <div  class="confetti">
      <slot />
    </div>
  {/if}
  </button>




<style>
  .relative {
    position: relative;
  }

  .relative .confetti {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .confetti {
    pointer-events: none;
  }
</style>
