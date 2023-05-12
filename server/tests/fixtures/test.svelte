<script>
  export let parent1 = "test";
  export let parent2;

  $: var1 = parent1;
  $: var2 = parent2;

  $: {
    if (var2) {
      var2 = parent1;
    }
  }

  // $: var6 = parent1 + parent2;
</script>
