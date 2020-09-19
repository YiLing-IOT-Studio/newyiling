<template>
<div>
  <div class="background"></div>
    <div id="main">
      <h2>{{msg1}}</h2>
      <h3>{{msg2}}</h3>
      <div id="four">
        <ul>
          <li>
            <div class="item">
              <div class="img">
              <img src="../assets/img/嵌入式.png">
              </div>
              <div class="text">
              <p>嵌入式</p>
              <p>C/C++, 51 单片机，STM32 树莓派，ardinuo，Linux，zigbee，FPGA，模拟电路，数字电路</p>
              </div>
             <div class="btn">
               <button>
                 <router-link to="/direction/flush">学习嵌入式</router-link>
               </button>
             </div>
            </div>
          </li>
          <li>
            <div class="item">
            <div class="img">
              <img src="../assets/img/后端.png">
            </div>
            <div class="text">
              <p>Web 后端</p>
              <p>Java/C++，Tomcat，数据库，SpringMVC，Hibernate，Mybatis，Security，Shiro，Redis，ehcache，Nginx</p>
              </div>
              <div class="btn">
               <button>
                 <router-link to="/direction/back">学习Web 后端</router-link>
               </button>
             </div>
            </div>
          </li>
          <li>
            <div  class="item">
              <div class="img">
              <img src="../assets/img/安卓.png">
              </div>
              <div class="text">
              <p>Android</p>
              <p>Java/Kotlin，Android Studio，MVP，MVVM，MaterialDesign，OKhttp Retrofit，Gson，realm，greendao，butterknife</p>
              </div>
              <div class="btn">
               <button>
                 <router-link to="/direction/Android">学习Android</router-link>
               </button>
             </div>
            </div>
        
          </li>
          <li>
            <div class="item">
              <div class="img">
              <img src="../assets/img/前端.png">
              </div>
              <div class="text">
              <p>Web 前端</p>
              <p>学习核心：HTML5，CSS3，JavaScript，ES6（ES7+），计算机网络及 HTTP 协议，浏览器原理，数据结构与基本算法</p>
              </div>
              <div class="btn">
               <button>
                 <router-link to="/direction/front">学习Web前端</router-link>
               </button>
             </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg1:'学习方向',
      msg2:'We learn Embedded, Andriod and Web development.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background{
    width:100%;  
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
    background-color:lightblue;
    left: 0;
    top:0;
}
#main{
		width: 100%;
		height: 100%;
    margin: 0;
    padding: 0;
    padding-top: 2%;
    
  
}
h3,h2{text-align: center;}
ul{margin: 0;padding: 0;}
#four{width: 90%;margin:auto;margin-top: 5%;}
li{list-style: none;float: left;width: 25%;height: 13em;}
.item{width:90% ;height: 100%;border: 1px solid gray;margin:auto;border-radius: 3%;font-size: 13px;position: relative;}
li div img{width: 40%;margin-top: 5%;}
.img{text-align: center;width: 100%;height: 40%;}
.text{margin-left: 3%;margin-right: 3%;}
.btn{position: absolute;bottom: -5%;height: 10%;width: 40%;left: 30%;}
button{display: inline-block;
height: 100%;
width: 100%;
font-size: 11px;
  cursor: pointer;
  text-align: center;   
  text-decoration: none;
  outline: none;
  color:indianred;
  background-color:gold;
  border: none;
  border-radius: 10%;
  box-shadow: 0 2px #999;}
  button:hover{background-color:gold;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);}
  button:active {
  background-color:khaki;
  box-shadow: 0 3px #666;
  font-weight: bold;
  transform: translateY(2px);
}
a{text-decoration-line: none;}
 a:active {color:black}
</style>