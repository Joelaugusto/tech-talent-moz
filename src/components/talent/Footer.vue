<template>
    <div class="footer">
        <span class="text">Copyright © 2014-2020 Involve Asia Technologies Sdn Bhd. All Rights Reserved</span>
        <div>
            <img :src="helpIcon" class="text"/>
            <router-link to="/" class="text">Ajuda</router-link>
        </div>
    </div>
</template>

<script>
import helpIcon from '../../assets/images/Vector.svg'
export default {
    setup () {
        
        
        return {helpIcon}
    }
}
</script>

<style lang="css" scoped>
    .footer{
        display: flex;
        justify-content: space-between;
        height: 37px;
        background: black;
        align-items: center;
        width: 100%;
        padding: 0 2vw;
    }
    .footer div{
        display: flex;
        align-items: center;
    }

    .footer div img{
        margin-right: 10px;
    }

    .text{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #959595;

    }
</style>