<script>
  export let parent1 = "test";
  let parent2 = "test2";

  $: var1 = parent1;
</script>

{parent1}

<span><span>{parent2.toLocaleLowerCase()}</span></span>
