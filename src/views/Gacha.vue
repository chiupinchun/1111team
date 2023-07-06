<template>
  <main class="container">
    <label>莊家
      <select v-model="dealer">
        <option v-for="name in member" :value="name">{{ name }}</option>
      </select>
    </label>
    <el-button @click="draw">{{ jinx.length ? '下一位倒楣鬼' : '抽倒楣鬼' }}</el-button>
    <ul>
      <li v-for="(name, index) in jinx">{{ `第${index + 1}位倒楣鬼：${name}` }}</li>
    </ul>
  </main>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import _member from '@/assets/ts/member';
import deepCopy from '@/utils/deepCopy';

const member = deepCopy(_member);

const dealer = ref<string | undefined>();

const jinx = reactive<string[]>([]);

const draw = () => {
  const drawFrom = member.filter(name => ![dealer.value, ...jinx].includes(name));
  if (!drawFrom.length) return ElMessage.error('沒人能抽啦！');
  jinx.push(drawFrom[Math.floor(Math.random() * drawFrom.length)]);
};
</script>

<style lang="less" scoped>
.container {
  margin: 5rem auto;
  width: 50vw;

  label {
    display: block;
    margin-bottom: 2.5rem;
  }
}
</style>