<template>
    <div>
        <h3 style="margin-bottom:5px">Upcoming Bills:</h3>
        <van-swipe @change="onchange">
             <van-swipe-item v-for="item in cardlist" :key="item.name">
                <article class="card"> 
                   <img :src="item.logo">
                   <div class="content">
                      <p>${{item.money}}</p>
                   </div>
                </article>
            </van-swipe-item>
            <template #indicator>
               <div class="custom-indicator">
                   {{ current + 1 }}/4
               </div>
            </template>
        </van-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cardlist:[
               {name:'optus', money:'-60',logo: require('../assets/image/cardlogo/optus.png')},
               {name:'telstra', money:'-70',logo: require('../assets/image/cardlogo/telstra.webp')},
               {name:'vodefone', money:'-90',logo: require('../assets/image/cardlogo/vodafone.jpg')},
            ],
            current: 0
        }
    },
    methods: {
        onchange(index) {
           this.current = index;
        }
    }
}
</script>
<style scoped>
.card {
   display: flex;
   flex-direction: column;
}

.card img {
    object-fit: cover;
    width: 100px;
    height: 40px;
    margin: 0 auto;
}

.content{
    text-align:center
}
.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
}
</style>