<template>
  <div class="hello">
    <el-row>
		  <el-col :span="24">
		  	<div class="grid-content bg-purple-dark">
		  		<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					  <el-submenu index="1">
					    <template slot="title">我的工作台</template>
					    <el-menu-item index="1-1">选项1</el-menu-item>
					    <el-menu-item index="1-2">选项2</el-menu-item>
					    <el-menu-item index="1-3">选项3</el-menu-item>
					  </el-submenu>
					  <el-submenu index="2">
					    <template slot="title">我的工作台</template>
					    <el-menu-item index="2-1">选项1</el-menu-item>
					    <el-menu-item index="2-2">选项2</el-menu-item>
					    <el-menu-item index="2-3">选项3</el-menu-item>
					  </el-submenu>
					  <el-submenu index="3">
					    <template slot="title">我的工作台</template>
					    <el-menu-item index="3-1">选项1</el-menu-item>
					    <el-menu-item index="3-2">选项2</el-menu-item>
					    <el-menu-item index="3-3">选项3</el-menu-item>
					  </el-submenu>
					  <el-submenu index="4">
					    <template slot="title">我的工作台</template>
					    <el-menu-item index="4-1">选项1</el-menu-item>
					    <el-menu-item index="4-2">选项2</el-menu-item>
					    <el-menu-item index="4-3">选项3</el-menu-item>
					  </el-submenu>
					  <el-submenu index="5">
					    <template slot="title">我的工作台</template>
					    <el-menu-item index="5-1">选项1</el-menu-item>
					    <el-menu-item index="5-2">选项2</el-menu-item>
					    <el-menu-item index="5-3">选项3</el-menu-item>
					  </el-submenu>
					</el-menu>
		  	</div>
		  </el-col>
		</el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
	  return {
	    activeIndex: '1',
	    activeIndex2: '1'
	  };
	},
	methods: {
	  handleSelect(key, keyPath) {
	    console.log(key, keyPath);
	  }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg-purple-dark {
    background: #555;
  }
  .grid-content {
    min-height: 50px;
    width: 100%;
    margin-bottom:25px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1030;
    box-shadow:0 6px 10px 0 rgba(0,0,0,0.12),0 2px 2px 0 rgba(0,0,0,0.12)
  }
</style>
