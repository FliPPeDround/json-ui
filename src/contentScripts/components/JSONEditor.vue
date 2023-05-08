<script setup lang="ts">
import { editor } from 'monaco-editor'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'

interface Props {
  code: string
}

const { code } = defineProps<Props>()

self.MonacoEnvironment = {
  getWorker(_workerId, label) {
    if (label === 'json')
      return new JsonWorker()

    return new EditorWorker()
  },
}

const JSONEditor = ref<HTMLElement>()

onMounted(() => {
  const domElement = JSONEditor.value!

  editor.create(domElement, {
    value: code,
    readOnly: false,
    language: 'json',
    tabSize: 2,
    theme: 'vs-dark',
    automaticLayout: true,
    fontSize: 14,
    scrollBeyondLastLine: false,
    overviewRulerBorder: false,
  })

  // instance.onDidChangeModelContent(() => {
  //   const value = instance.getValue();
  //   emit('update:modelValue', value);
  // });
})
</script>

<template>
  <div ref="JSONEditor" />
</template>
