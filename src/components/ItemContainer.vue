<template>
  <div class="item_container">
    <header class="top_tips">
    	<span class="num_tip" v-if="isFirstFlag">首页</span>
    	<span class="num_tip" v-if="!isFirstFlag">题目{{ itemNum }}</span>
    </header>
    <div v-if="isFirstFlag" >
    	<div class="home_logo item_container_style"></div>
    	<div class="start button_style" @click="isFirstFlag=false"></div>
    </div>
    <div v-if="!isFirstFlag" >
    	<div class="item_back item_container_style">
    		<div class="item_list_container" v-if="itemDetails.length > 0">
    			<header class="item_title">{{itemDetails[itemNum-1].topic_name}}</header>
    			<ul>
    				<li  v-for="(item, index) in itemDetails[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)" class="item_list">
    					<span class="option_style" v-bind:class="{'has_choosed':index === choosedIndex}">{{chooseType(index)}}</span>
    					<span class="option_detail">{{item.answer_name}}</span>
    				</li>
    			</ul>
    		</div>
    	</div>
    	<span class="next_item button_style"  v-if="itemNum < itemDetails.length" @click="nextItem"></span>
    	<span class="submit_item button_style" v-else @click="submit"></span>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions,mapMutations } from 'vuex'

export default {
  name: 'itemcontainer',
  data () {
    return {
      isFirstFlag: true, //是否是首页
      itemNum: 1,				 //第几道题
      choosedId:null,		 //选中的答案序号
      choosedIndex:null,
      
    }
  },
  computed: {
  	itemDetails () {
      return this.$store.state.itemDetails
    }
  },
  methods: {
  	choosed(index,id){//选中的答案信息
	  		this.choosedIndex = index;
	  		this.choosedId = id;
	  	},
	//索引0-3对应答案A-B
	  chooseType: index => {
	  	switch(index){
	  		case 0: return 'A';
	  		case 1: return 'B';
	  		case 2: return 'C';
	  		case 3: return 'D';
	  	}
	  },
	  nextItem () {
	  	if (this.choosedId != null) {
	  		this.addNumber();
	  		this.itemNum++;
	  		this.choosedId = null;
	  		this.choosedIndex = null;
	  	} else {
	  		alert('答案不能为空！');
	  	}

	  },
	  submit () {
	  	if (this.choosedId != null) {
	  		this.addNumber();
	  		this.$router.push('score')
	  	} else {
	  		alert('答案不能为空！');
	  	}
	  },
	  addNumber () {//每道题做完计分
	  	var self = this;
	  	var istrue = this.$store.state.itemDetails[this.itemNum-1].topic_answer[this.choosedIndex].is_standard_answer;
	  	if (istrue) {
	  		//self.totalNumber += 20;
	  		this.$store.commit('increment', 20)
	  	}
	  	
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.item_container {
		background: url(../assets/1-1.jpg); 
		background-repeat:no-repeat;
		background-size:100% 100%;
		height:100%;
		position: relative;
		.top_tips{
			position: absolute;
			height: 11rem;
			width: 7rem;
			top: -1.3rem;
			right: 1.6rem;
			background: url(../assets/WechatIMG2.png) no-repeat;
			background-size: 100% 100%;
			z-index: 10;
			.num_tip{
				position: absolute;
				left: 1.8rem;
				bottom: 2.0rem;
				height: 0.7rem;
				width: 4rem;
				font-size: 1.2rem;
				font-family: '黑体';
				font-weight: 600;
				color: #a57c50;
				text-align: center;
				display: block;
			}
		}
		.item_container_style{
			height: 18rem;
			width: 25rem;
			background-repeat: no-repeat;
			position: absolute;
			top: 12rem;
			left: 3rem;
		}	
		.home_logo{
			background: url(../assets/1-2.png);
			background-size: 100% 100%;
		}
		.button_style{
			display: block;
			height: 3rem;
			width: 6.5rem;
			background-size: 100% 100%;
			position: absolute;
			top: 30.5rem;
			left: 50%;
			margin-left: -3.2rem;
			background-repeat: no-repeat;
		}
		.start{
			background-image: url(../assets/1-4.png);
		}
		.item_back{
			background-image: url(../assets/2-1.png);
			background-size: 100% 100%;
		}
		.item_list_container{
    	position: absolute;
    	height: 7.0rem;
    	width: 8.0rem;
    	top: 2.4rem;
    	left: 3rem;
		-webkit-font-smoothing: antialiased;
    }
    .next_item{
    	background-image: url(../assets/2-2.png);
    }
    .submit_item{
    	background-image: url(../assets/3-1.png);
    }
    .item_title{
    	font-size: 0.65rem;
    	color: #fff;
    	line-height: 0.7rem;
    }
    .item_list{
    	font-size: 0;
    	margin-top: 0.4rem;
    	width: 10rem;
    	span{
    		display: inline-block;
    		font-size: 0.6rem;
    		color: #fff;
    		vertical-align: middle;
    	}
    	.option_style{
    		height: 0.725rem;
    		width: 0.725rem;
    		border: 1px solid #fff;
    		border-radius: 50%;
    		line-height: 0.725rem;
    		text-align: center;
    		margin-right: 0.3rem;
    		font-size: 0.5rem;
    		font-family: 'Arial';
    	}
    	.has_choosed{
    		background-color: #ffd400;
    		color: #575757;
    		border-color: #ffd400;
    	}
    	.option_detail{
    		width: 7.5rem;
    		padding-top: 0.11rem;
    	}
    }
	}
</style>
