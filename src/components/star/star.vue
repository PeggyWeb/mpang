<template>
	<div class="star" :class="starType">
    <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" :key="index"></span>
	</div>
</template>
<script>
  const LENGTH=5;
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';

	export default{
		props:{
			size:{
				type:Number
      },
      score:{
				type:Number
      }
    },
    computed:{
			starType(){
				return 'star-'+this.size;
      },
      itemClasses(){
				let result = [];
				let score = Math.floor(this.score*2)/2;
				let hasDecimal = score  % 1!==0;
				let integer = Math.floor(score);
				for(let i = 0; i < integer;i++){
					result.push(CLS_ON);
        }
        if(hasDecimal){
					result.push(CLS_HALF);
        }
        while(result.length<LENGTH){
        	result.push(CLS_OFF);
        }

        return result;
			}
    }
  }
</script>
<style>
  .star{
    font-size:0;
  }
  .star-item{
    display: inline-block;
    background-repeat:no-repeat;
  }
  .star-item:last-of-type{
    margin-right:0!important;
  }
  .star-48 .star-item{
    width: 20px;
    height:20px;
    margin-right:22px;
    background-size:20px 20px;
  }
  .star-48 .star-item :last-child{margin-right:0}
  .star-48 .star-item.on{
    background-image: url(star48_on@3x.png);
  }
  .star-48 .star-item.off{
    background-image: url(star48_off@3x.png);
  }
  .star-48 .star-item.half{
    background-image: url(star48_half@3x.png);
  }
  .star-36 .star-item{
    width: 20px;
    height:20px;
    margin-right:22px;
    background-size:20px 20px;
  }
  .star-36 .star-item :last-child{margin-right:0}
  .star-36 .star-item.on{
    background-image: url(star36_on@3x.png);
  }
  .star-36 .star-item.off{
    background-image: url(star36_off@3x.png);
  }
  .star-36 .star-item.half{
    background-image: url(star36_half@3x.png);
  }
  .star-24 .star-item{
    width: 16px;
    height:16px;
    margin-right:5px;
    background-size:16px 16px;
  }
  .star-24 .star-item :last-child{margin-right:0}
  .star-24 .star-item.on{
    background-image: url(star24_on@3x.png);
  }
  .star-24 .star-item.off{
    background-image: url(star24_off@3x.png);
  }
  .star-24 .star-item.half{
    background-image: url(star24_half@3x.png);
  }
</style>
