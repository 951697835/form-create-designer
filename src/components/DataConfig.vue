<template>
  <div class="_fd-event">
    <el-input
      v-model="inputCS"
      placeholder="请输入内容"
      @blur="submit"
    ></el-input>
  </div>
</template>

<script>
import unique from "@form-create/utils/lib/unique";
import is from "@form-create/utils/lib/type";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DataConfig",
  emits: ["update:modelValue"],
  props: {
    rule: { type: Array, default: () => [] },
  },
  inject: ["designer"],
  data() {
    return {
      inputCS: "",
      cacheData: [],
    };
  },
  computed: {
    t() {
      return this.designer.setupState.t;
    },
  },
  watch: {
    rule(newValue) {
      console.log(
        "propspropsprops==>",
        newValue,
        "____fc___id=>",
        this.rule._fc_id
      );
    },
  },
  mounted() {
    console.log("propsmounted==>", this.rule);
    this.cacheData = JSON.parse(localStorage.getItem("cacheData")) || [];
    console.log("cacheData=>", this.cacheData);
    if (this.cacheData.length > 0) {
      this.cacheData.forEach((item) => {
        if (item._fc_id == this.rule._fc_id) {
          this.inputCS = item.inputValue;
        }
      });
    }
  },
  methods: {
    submit() {
      console.log("propssubmit==>", this.cacheData);
      // this.rule.inputValue = this.inputCS;
      if (this.cacheData.length > 0) {
        this.cacheData.forEach((item) => {
          if (item._fc_id == this.rule._fc_id) {
            console.log("xxxxxttttt", this.inputCS);
            item.inputValue = this.inputCS;
          }
        });
        const existingObject = this.cacheData.find(
          (obj) => obj._fc_id === this.rule._fc_id
        );
        if (!existingObject) {
          this.rule.inputValue = this.inputCS;
          this.cacheData.push(this.rule);
          // localStorage.setItem("cacheData", JSON.stringify(this.cacheData));
        }
      } else {
        this.rule.inputValue = this.inputCS;
        this.cacheData.push(this.rule);
        // localStorage.setItem("cacheData", JSON.stringify(this.cacheData));
      }
        localStorage.setItem("cacheData", JSON.stringify(this.cacheData));

      // this.cacheData.push(this.rule);

      this.$emit("update:modelValue", this.inputCS);
    },
  },
  beforeCreate() {
    window.$inject = {
      $f: {},
      rule: [],
      self: {},
      option: {},
      inject: {},
      args: [],
    };
  },
});
</script>

<style>
._fd-event .el-button {
  font-weight: 400;
  width: 100%;
  border-color: #2e73ff;
  color: #2e73ff;
}

._fd-event .el-badge {
  width: 100%;
}

._fd-event-dialog .el-dialog__body {
  padding: 10px 20px;
}

._fd-event-con .el-main {
  padding: 0;
}

._fd-event-l,
._fd-event-r {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  border: 1px solid #ececec;
}

._fd-event-dropdown .el-dropdown-menu {
  max-height: 500px;
  overflow: scroll;
}

._fd-event-head {
  display: flex;
  padding: 5px 15px;
  border-bottom: 1px solid #eee;
  background: #f8f9ff;
  align-items: center;
}

._fd-event-head .el-button.is-link {
  color: #2f73ff;
}

._fd-event-r {
  border-left: 0 none;
}

._fd-event-r ._fd-event-head {
  justify-content: space-between;
}

._fd-event-l > .el-main,
._fd-event-r > .el-main {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  width: 100%;
}

._fd-event-r > .el-main {
  flex-direction: column;
}

._fd-event-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 250px;
  font-size: 14px;
  overflow: hidden;
  white-space: pre-wrap;
}

._fd-event-l .el-menu {
  padding: 0 10px 5px;
  border-right: 0 none;
  width: 100%;
  border-top: 0 none;
  overflow: auto;
}

._fd-event-l .el-menu-item.is-active {
  background: #e4e7ed;
  color: #303133;
}

._fd-event-l .el-menu-item {
  height: auto;
  line-height: 1em;
  border: 1px solid #ececec;
  border-radius: 5px;
  padding: 0;
  margin-top: 5px;
}

._fd-event-method {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 225px;
  font-size: 14px;
  font-family: monospace;
  color: #9d238c;
  overflow: hidden;
  white-space: pre-wrap;
}

._fd-event-method > span:first-child,
._fd-fn-list-method > span:first-child {
  color: #9d238c;
}

._fd-event-method > span:first-child > span,
._fd-fn-list-method > span:first-child > span {
  color: #000;
  margin-left: 10px;
}

._fd-event-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
}

._fd-event-title .fc-icon {
  margin-right: 6px;
  font-size: 18px;
  color: #282828;
}

._fd-event-title .el-input {
  width: 200px;
}

._fd-event-title .el-input__wrapper {
  box-shadow: none;
}

._fd-event-title .el-menu-item.is-active i {
  color: #282828;
}

._fd-event-con .CodeMirror {
  height: 100%;
  width: 100%;
}

._fd-event-con .CodeMirror-wrap pre.CodeMirror-line {
  padding-left: 20px;
}
</style>
