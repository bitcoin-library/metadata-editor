<script>
  export let mdContributor
</script>

<div class="ml-2 mt-4 p-2 flex flex-row items-center">
  <div>
    <label class="label">Name</label>
    <input bind:value={mdContributor.name} class="input input-bordered" type="text" />
  
    <label class="label">npub</label>
    <input bind:value={mdContributor.npub} class="input input-bordered" type="text" />
  </div>
  
</div>