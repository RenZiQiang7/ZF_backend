<template>
    <div>
        <span>积分设置规则</span><br>
        <p><input type="checkbox">首次登陆注册可获得<input type="text" placeholder="10" disabled>积分</p><br>
        <p><input type="checkbox" checked>每笔消费一笔可获得<input type="text" placeholder="1" disabled>积分</p><br>
        <p><input type="checkbox" checked>每充值一元可获得<input type="text" placeholder="1" disabled>积分</p>
        <hr>
        <span>积分抵用设置</span><br>
        <p><input type="radio">不使用积分设置</p><br>
        <p><input type="radio" checked>使用积分抵扣<input type="text" placeholder="100" disabled >积分=1元</p><br>
        <p><input type="checkbox" checked>单次消费最多使用<input type="text" placeholder="5000">积分</p>
        <hr>
        <span>积分过期规则</span><br>
        <p><input type="radio" checked>一直有效，永不过期</p><br>
        <p><input type="radio">获得的成长值在<select><option>当年</option></select>12月31日过期</p>
        <hr>
        <button class="lk">提交</button>
    </div>
</template>
<style lang="scss" scoped>
div{
    width: 60%;
    position: relative;
    float: left;
}
.lk{
    background:#1890ff;
    outline: none;
    border: none;
    border-radius: 5%;
    width: 140px;
    height: 40px;
   position: absolute;
   left: 30%;
}
span{
    font-size: 20px;
    
}

</style>