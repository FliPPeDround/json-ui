<script setup lang="ts">
interface Props {
  code: string
}

const { code } = defineProps<Props>()
const JSONGraphs = ref<HTMLIFrameElement>()!

onMounted(() => {
  const domElement = JSONGraphs.value!
  domElement.onload = () => {
    domElement.contentWindow!.postMessage(
      {
        json: code,
        option: {
          theme: 'dark',
          direction: 'RIGHT',
        },
      },
      '*',
    )
  }
})
</script>

<template>
  <iframe
    ref="JSONGraphs"
    src="https://jsoncrack.com/widget"
    frameborder="0"
    width="100%" height="100%"
  />
</template>
