<script>
	import { resource } from '$lib/store';

  export let author

  function removeAuthor() {
    $resource.authors = $resource.authors.filter(a => a.id !== author.id)
  }
</script>

<div class="ml-2 mt-4 p-2 flex flex-row items-center">
  <div>
    <label class="label">Name</label>
    <input bind:value={author.name} class="input input-bordered" type="text" />
  
    <label class="label">npub</label>
    <input bind:value={author.npub} class="input input-bordered" type="text" />
  </div>
  <label on:click={removeAuthor} class="btn btn-sm btn-circle btn-error ml-5">X</label>
  
</div>