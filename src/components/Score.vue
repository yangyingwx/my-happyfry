<template>
  <div class="last_page_container">
    <div class="your_scores_container">
      <header class="your_scores"><span class="score_num">{{score}}</span><span class="fenshu">分！</span></header>
      <div class="result_tip">{{scoreTips}}</div>
    </div>
    <div class="share_button" @click="showCover"></div>
    <div class="share_code">
      <header class="share_header">关注葡萄之家，获取答案。</header>
      <img src="../assets/4-4.png" height="212" width="212" class="code_img"> 
    </div>
    <div class="share_cover" v-show="showHide" @click="showCover">
      <img src="../assets/5-2.png" class="share_img">
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'score',
  data(){
    return {
            showHide: false, //是否显示提示
            
            scoreTips:'', //分数提示
            rightAnswer: [2, 7, 12, 13, 18], //正确答案
            scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！'],
          }
        },

  created(){
    this.getScoreTip();
  },
  computed: {
    score: function () {
      return this.$store.state.totalScore;
    }
  },
  methods: {
  //是否显示分享提示
    showCover: function (){
      this.showHide = !this.showHide;
    },
    //根据分数显示提示
    getScoreTip: function (){
      if(this.score <= 20) {
        this.scoreTips = this.scoreTipsArr[0];
        return
      }
      if(this.score <= 40) {
        this.scoreTips = this.scoreTipsArr[1];
        return
      }
      if(this.score <= 60) {
        this.scoreTips = this.scoreTipsArr[2];
        return
      }
      if(this.score <= 80) {
        this.scoreTips = this.scoreTipsArr[3];
        return
      }
      if(this.score <= 100) {
        this.scoreTips = this.scoreTipsArr[4];
      }
    }
  },
}

</script>

<style lang="less">
    .last_page_container{
        background: url(../assets/4-1.jpg);
        padding-top: 4rem;
        height: 100%;
    }
    .your_scores_container{
        width: 16rem;
        height:15rem;
        background: url(../assets/4-2.png) no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
        position: relative;
        .your_scores{
            position: absolute;
            width: 100%;
            text-indent: 3.3rem;
            top: 7rem;
            font-size: 2rem;
            font-weight: 900;
            -webkit-text-stroke: 0.05rem #412318;
            font-family: 'Microsoft YaHei';
            .score_num{
                font-family: Tahoma,Helvetica,Arial;
                color: #a51d31;
            }
            .fenshu{
                color: #a51d31;
            }
        }
        .result_tip{
            position: absolute;
            top: 10rem;
            width: 9rem;
            left: 4rem;
            color: #3e2415;
            font-size:1rem;
            text-align: center;
        }
    }
    .share_button{
        width: 10rem;
        height: 5rem;
        margin: 1.5rem auto 0;
        background: url(../assets/4-3.png) no-repeat 0.4rem 0;
        background-size: 100% 100%;
    }
    .share_code{
        width: 9rem;
        margin: 3rem auto 0;
        .share_header{
            color: #664718;
            font-size: 1rem;
            font-family: 'Microsoft YaHei';
            width: 9rem;
            font-weight: 500;
        }
        .code_img{
            height: 7rem;
            width: 7rem;
            margin-top: 1rem;
        }
    }
    .share_cover{
        position: fixed;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        background: url(../assets/5-1.png) no-repeat;
        background-size: 100% 100%;
        opacity: 0.92;
    }
    .share_img{
        height: 14rem;
        width: 15rem;
        position: fixed;
        top: 0.5rem;
        left: 50%;
        margin-left: -5.975rem;
    }
</style>
