<script setup lang="ts">
import 'uno.css'
import { Pane, Splitpanes } from 'splitpanes'
import JSONEditor from '../components/JSONEditor.vue'
import JSONGraphs from '../components/JSONGraphs.vue'
import 'splitpanes/dist/splitpanes.css'
interface Props {
  msg: string
}

const { msg } = defineProps<Props>()
</script>

<template>
  <div class=":uno: font-sans leading-1em">
    <Splitpanes h-screen w-screen>
      <Pane>
        <JSONEditor :code="msg" h-screen />
      </Pane>
      <Pane>
        <JSONGraphs :code="msg" h-screen />
      </Pane>
    </Splitpanes>
  </div>
</template>
