<template>
  <el-button type="primary" @click="add">新增</el-button>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="500"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup>
import { defineComponent, getCurrentInstance, ref, defineEmits } from "vue";

const vm = getCurrentInstance();

const emits = defineEmits(["addEvent"]);
const dialogVisible = ref(false);
const tableData = ref([
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
]);
const handleClose = (done) => {
  dialogVisible.value = false;
};
const add = () => {
  dialogVisible.value = true;
  let dataJson = localStorage.getItem("fc-config-$101");

  emits("addEvent", dataJson);

  console.log("zxxxzxxxxxx11", dataJson);
};
</script>
