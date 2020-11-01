<template>
    <div id="main" ref="main">
      <div class="nav" ref="nav">
        <div class="top">{{top}}</div>
        <div id="head">
        <ul >
          <a class="nav-link" href="#/studyPage">翼灵官网</a>
          <a class="nav-link" href="#/direction/back">Web后端</a>
          <a class="nav-link" href="#/direction/android">安卓</a>
          <a class="nav-link" href="#/direction/front">Web前端</a>
        
        </ul>
        </div>
        </div>
        <ul id="a">
          <a class="nav-link" href="#/studyPage">翼灵官网</a>
          <a class="nav-link" href="#/direction/back">Web后端</a>
          <a class="nav-link" href="#/direction/android">安卓</a>
          <a class="nav-link" href="#/direction/front">Web前端</a>
        
        </ul>
     <h1 ref="h">{{top}}</h1>
      <h2>{{logo}}</h2>
      <div id="text">
      <span id="intro"></span><span id="timer">|</span>
      </div>
      <div >
        <div class="col">
            <hr />
            <h3>Group members</h3>
            <hr />
        </div>
        <div class="wall">
      <ul id="mem">
      <li
        v-for="item of member"
    :key="item.id"
      >
       
        <div class="member">
         
                <img class="img" :src="item.img" />
            <p class="name">{{item.name}}</p>
          <p v-for="a of item.feature" :key="a.id" >{{a}}</p>
        </div>
      </li>
    </ul>
    </div>
    </div>
    <div class="container">
        <p class="text-center">
            &copy; 2018
            <a href="/">翼灵物联工作室</a>
            <a href="https://github.com/YiLing-IOT-Studio">
                <img alt="github" class="git-img" src="../assets/img/github.jpg" />
            </a>

            <a href="http://www.miitbeian.gov.cn">蜀ICP备18039687号</a>
        </p>
    </div>
    </div>
</template>
<script>
import msg1 from '../assets/flush'
export default {
  
  name: 'direction',
  data () {
    return {
      msg1,
      msgm:[],
      top:'',
      logo:'',
      member:[],
      showIntro:''
    }
  },
  methods: {
        show() {
          var intro=document.getElementById("intro"),
          timer=document.getElementById("timer"),
          interval=null,
          showIntro=eval(this.showIntro),
          isVisible=true;
          interval=setInterval(
            function(){
              timer.style.visibility=isVisible?"visible":"hidden";
              isVisible=isVisible?false:true},300);
              setTimeout(
                function(){timeout(showIntro.split(""),[],intro)},1500);
                function timeout(arr,dest,el)
              {var t=80;
              setTimeout(function()
              {var html=dest.join("");
              dest=html.split("");
              el.innerHTML=html;if(arr.length!=0){var tmp=arr.shift();dest.push(tmp);timeout(arr,dest,el)}else{clearInterval(interval);timer.style.display="none";interval=null}},t)}var nav=document.getElementById("nav");document.addEventListener("scroll",winScroll,false);function winScroll(){var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;if(scrollTop>30){nav.style.display="block"}else{nav.style.display=""}};
        },
        json(){
          
          
            this.msgm=msg1;
            this.$refs.main.style.height ="255em"	
            
          this.top=this.msgm.top;
          this.logo=this.msgm.logo;
          this.member=this.msgm.member;
          this.showIntro=this.msgm.showIntro;
        },
        getScroll(){
          if( window.pageYOffset==0)
          this.$refs.nav.style.display ="none"	
          if( window.pageYOffset>	this.$refs.h.offsetHeight)
          {
              this.$refs.nav.style.display ="block"	
              
        }
        
      }
  },
      mounted() {
        
        this.json()
        this.show()
        window.addEventListener('scroll', this.getScroll);
         document.documentElement.scrollTop=0;
       }
        }
      
</script>
<style scoped>
#main{width: 100%;margin:0;height: 270em;
position: absolute;
left: 0;
top:0;
background-image: url('../assets/img/背景.jpg');
background-size:cover;
color: white;
text-align: center;
padding-top: 5%;
}
#text{width: 60%;margin: auto;line-height:2em;height: 20em;margin-bottom: 5em;}
hr {
    border-color: whitesmoke;
    width: 2.5rem;
    padding: 0;
    margin: 0
}
h3 {
    font-family: "Lucida handwriting","Snell Roundhand","Helvetica Neue",Arial,Helvetica,sans-serif;
    margin: 0 10px;
    font-size: 2em;
}
.col{
    margin: 0 auto;
    color: whitesmoke;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    text-align: center
}
.wall{
  width: 70%;
  margin: auto;
    margin-top: 4em;
    background-color: rgba(255,225,234,0.4);
    margin-bottom: 2em;
    text-align: justify;
    padding-top: 3em;
    padding-bottom: .1em;
}
.img{float: left;
height: 13em;margin-right: 3em;width: 12em;}
#mem li{margin-bottom: 7.7em;}
p{font-size: 0.8em;}
.name{font-size: 1.5em;}
.nav{width: 100%;height: 3em;background-color:rgb(55, 138, 194);display: none;position: fixed;top:0;
padding-bottom: 0;line-height: 3em;height: 3em;font-size: 1.2em;}
.top{float: left;margin-left: 3rem;}
.container{width: 100%;position: absolute;bottom: 0;}
.git-img{width: 1em;}
.container a{text-decoration-line: none;}
.container p a:link{color: powderblue;}
.container p a:visited{color: powderblue;}
.container p a:hover{color: powderblue;}
#head{float: right;font-size: 0.7em;}
#head a{text-decoration-line: none;margin-right: 3em;}
ul{padding: 0;margin: 0;}
a{text-decoration-line: none;}
#a a{margin-right: 3em;font-size: 0.8em;}
#a a:link{color:rgb(86, 180, 102)}
#a a:visited{color:rgb(86, 180, 102) }
#a a:hover {color: red} 
</style>