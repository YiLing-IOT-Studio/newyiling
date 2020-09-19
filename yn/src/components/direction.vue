<template>
    <div id="main" ref="main">
     <h1>{{top}}</h1>
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
      <ul>
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
    </div>
</template>
<script>
import msg1 from '../assets/flush'
import msg2 from '../assets/back'
import msg3 from '../assets/android'
import msg4 from '../assets/front'
export default {
  
  name: 'direction',
  data () {
    return {
      msg1,
      msg2,
      msg3,
      msg4,
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
          
          if(this.$route.params.id=='flush')
          {
            this.msgm=msg1;
            
          }
          else if(this.$route.params.id=='back')
          {
            this.msgm=msg2;
          }
          else if(this.$route.params.id=='android')
          {
            this.msgm=msg3;
          }
          else if(this.$route.params.id=='front')
          {
            this.msgm=msg4;
          }
          this.top=this.msgm.top;
          this.logo=this.msgm.logo;
          this.member=this.msgm.member;
          this.showIntro=this.msgm.showIntro;
        }
      },
      mounted() {
        
        this.json()
        this.show()
       }
        }
      
</script>
<style scoped>
#main{width: 100%;margin:0;height: 250em;
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
li{margin-bottom: 7.7em;}
p{font-size: 0.8em;}
.name{font-size: 1.5em;}

</style>