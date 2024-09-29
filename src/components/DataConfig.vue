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
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "dataConfig",
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    add() {
      console.log("zxxxzxxxxxx",this.$refs.designer);
      // this.$refs.designer.setRule(formCreate.parseJson(json));

      // this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？").then((_) => {
        done();
      });
    },
  },
});
</script>
