<template>
  <div id="app">
    <HelloWorld/>
    <nav>
    	<el-row>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
			</el-row>
    </nav>
    <section class="section_title">
    	<ul>
    		<li>Utilities</li>
    		<li>Microservices</li>
    		<li>Web Tools</li>
    		<li>Time Series</li>
    		<li>Sentiment Analysis</li>
    	</ul>
    </section>
    <section id="section_con">
    	<h3>BROWSE ALL ALGORITHMS:</h3>
    	<el-tabs type="border-card">
			  <el-tab-pane label="用户管理">用户管理</el-tab-pane>
			  <el-tab-pane label="配置管理">配置管理</el-tab-pane>
			  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
			  <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
			</el-tabs>
    </section>
    <dpsfooter/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import dpsfooter from './components/footer'

export default {
  name: 'app',
  components: {
    HelloWorld,
    dpsfooter
  }
}
</script>

<style>
	nav{
		margin-top: 75px;
	}
	.grid-content {
    min-height: 120px;
    border: 1px solid #ccc;
  }
  .section_title ul{
  	overflow: hidden;
  }
  .section_title ul li{
  	float: left;
  }
  #section_con{
  	
  }
  #section_con .el-tabs__nav{
  	width: 100%;
  }
  #section_con .el-tabs__item{
  	width: 25%;
  	text-align: center;
  }
  #section_con .el-tabs__content{
  	min-height: 800px;
  }
  
</style>
