<template>
  <router-view v-slot="slotProps">  
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>  
<script>

export default {

  data() {
    return { 
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisable: false,
      usersAreVisible: false,
      enteredInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    enter(el, done) {
      console.log('enter')
      let round = 1 
      this.enteredInterval = setInterval(() => {
        el.style.opacity = round * 0.01
        round++
        if(round > 100) {
          clearInterval(this.enteredInterval)
          done()
        }
      }, 20);
    },
    afterEnter() {
      console.log('afterEnter')
    },
    beforeEnter(el) {
      console.log('beforeEnter')
      console.log(el)
      el.style.opacity = 0
    },
    beforeLeave(el) {
      console.log('befoureLeave')
      console.log(el)
      el.style.opacity = 1
    },
    leave(el, done){
    let round = 1 
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01
        round++
          if(round > 100) {
          clearInterval(this.leaveInterval)
          done()
        }
      }, 20);
    },
    afterLeave(){
      console.log('red')
    },
    enteredCancelled(){
      clearInterval(this.enteredInterval)
    },
    leaveCancelled(){
      clearInterval(this.leaveInterval)
    },
    showUsers() {
      this.usersAreVisible = true
    },
    hideUsers() {
      this.usersAreVisible = false
    },
    animateBlock(){
      this.animatedBlock = true
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph(){
      this.paraIsVisable = !this.paraIsVisable
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate{
  /* transform: translateX(-150px); */
  animation: slide-frame 0.3s ease-out forwards;
}
.route-enter-from {

}
.route-enter-active {
  animation: slide-frame 0.4s ease-out;
}
.route-enter-to {
  
}
.route-leave-active{
  animation: slide-frame 0.4 ease-in;
}
/* .v-enter-from{
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-active{
  transition: all 0.3s ease-out;
}

.v-enter-to{
  opacity: 1;
  transform: translateY(0);
}

.v-leave-from{
  opacity: 1;
  transform: translateY(0px);
}
.v-leave-active{
  transition: all 0.3s ease-out;
}
.v-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity .3s ease-out;
}
.fade-button-leave-active{
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
} */
@keyframes slide-frame {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>