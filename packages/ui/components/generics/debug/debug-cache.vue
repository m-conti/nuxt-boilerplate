<template>
  <table class="cache-debug">
    <tbody>
      <tr>
        <td>Generated at</td>
        <td>{{ generatedTimeFormatted }}</td>
      </tr>
      <tr>
        <td>Time ago</td>
        <td>{{ timeAgo }}s</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { moment } from 'utils';

const props = withDefaults(defineProps<{
  reactive: number;
}>(), {
  reactive: 1_000,
});

const now = useNow({ interval: props.reactive });
const generatedTime = useState('generatedTime', () => now.value);
const generatedTimeFormatted = useState('generatedTimeFormat', () => moment(now.value).format('lll'));
const timeAgo = computed(() => moment(now.value)?.diff(generatedTime.value, 's'));

</script>

<style scoped lang="postcss">
.cache-debug {
  & td, tr {
    padding: 0.5rem;
  }
}
</style>
