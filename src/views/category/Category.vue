<template>
  <div class="wrapper">
    <ul @load="onload">
      <li>分类1</li>
      <li>分类2</li>
      <li>分类3</li>
      <li>分类4</li>
      <li>分类5</li>
      <li>分类6</li>
      <li>分类7</li>
      <li>分类8</li>
      <li>分类9</li>
      <li>分类10</li>
      <li>分类11</li>
      <li>分类12</li>
      <li>分类13</li>
      <li>分类14</li>
      <li>分类15</li>
      <li>分类16</li>
      <li>分类17</li>
      <li>分类18</li>
      <li>分类19</li>
      <li>分类20</li>
      <li>分类21</li>
      <li>分类22</li>
      <li>分类23</li>
      <li>分类24</li>
      <li>分类25</li>
      <li>分类26</li>
      <li>分类27</li>
      <li>分类28</li>
      <li>分类29</li>
      <li>分类30</li>
      <li>分类31</li>
      <li>分类32</li>
      <li>分类33</li>
      <li>分类34</li>
      <li>分类35</li>
      <li>分类36</li>
      <li>分类37</li>
      <li>分类38</li>
      <li>分类39</li>
      <li>分类40</li>
      <li>分类41</li>
      <li>分类42</li>
      <li>分类43</li>
      <li>分类44</li>
      <li>分类45</li>
      <li>分类46</li>
      <li>分类47</li>
      <li>分类48</li>
      <li>分类49</li>
      <li>分类50</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    methods: {
      onload() {
        this.initBscroll()
      },
      initBscroll() {
        this.scroll = new BScroll('.wrapper', {
          mouseWheel: {
            speed: 15,
            invert: false,
            easeTime: 300
          },
          scrollbar: {
            // customElements: [this.$refs.vertical],
            fade: false,
            interactive: true,
            scrollbarTrackClickable: true
          },
          scrollX: false,
          scrollY: true,
          click: true,
          probeType:3,
          pullUpLoad:true
        })
      }
    },
    mounted() {
      this.initBscroll()
      this.scroll.on('scroll',(position)=>{
        // console.log(position);
      })
      this.scroll.on('pullingUp',()=>{
        console.log('上拉加载更多');
      })
    }
  }
</script>

<style>
  .wrapper {
    height: 150px;
    overflow: hidden;
    /* overflow-y: scroll; */
  }

  .bscroll-vertical-scrollbar {
    position: absolute;


    height: 150px;
    width: 7px;
    border-radius: 6px;
    background-color: rgb(200, 200, 200, 0.3);
  }

  .bscroll-indicator {
    width: 100%;
    height: 30px;
    border-radius: 6px;
    background-color: #ff002f;
  }
</style>