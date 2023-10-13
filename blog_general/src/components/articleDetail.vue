<template>
  <div style="width: 100%">
    <div class="article clearfix">
        <div>
          <h1 class="title">{{ title }}</h1>
          <div class="author">
            <div class="avatar">
<!--              <img alt="落霞孤鹜" class="auth-logo" src="../../assets/myAvatar.jpg">-->
            </div>
            <div class="info">
<!--              <span class="name">-->
<!--                <span>{{ state.detail.author }}</span>-->
<!--              </span>-->
<!--              <div data-author-follow-button="" props-data-classes="user-follow-button-header"/>-->
              <div class="meta">
                <span class="publish-time">
                  {{ createtime}}
                </span>
                <span class="views-count">有 {{ viewcounts }} 人看过啦</span>
              </div>
            </div>
            <div class="tags" title="标签">
              <el-tag size="small" type="success">
                {{ categoryName }}
              </el-tag>
            </div>
            <span class="clearfix"/>
          </div>
        </div>
        <div class="content">
          <div id="content" class="article-detail">
            <v-md-preview :text=content></v-md-preview>
          </div>
        </div>
      </div>

<!--      <Loading v-if="state.isLoading"/>-->
    </div>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, onMounted, onUnmounted, reactive, toRefs} from "vue";
import {articleDetail, updateViewCounts} from "@/api/article";
import $bus from "@/utils/mitt";
import router from "@/router";

export default defineComponent({
  name: "articleDetail",

  setup(){
    const data=reactive({
      articleId:1,
      categoryName:"a",
      title:"default",
      content:"default",
      createtime:'default',
      viewcounts:0
    })
    data.articleId= router.currentRoute.value.params.id as unknown as number

    function getDetail(){
      articleDetail(data.articleId).then((res)=>{
        // console.log(res.data)
        // console.log(data.articleId)
        data.articleId=res.data.id
        data.content=res.data.content;
        data.title=res.data.title;
        data.viewcounts=res.data.viewcounts;
        if(res.data.createtime!=null){
          data.createtime=res.data.createtime;
        }
        if(res.data.categoryname!=null){
            data.categoryName=res.data.categoryname;
        }
      })
    }

    onMounted(()=>{
      getDetail();
      updateViewCounts(data.articleId);
    })




    return{...toRefs(data)}
  }
})
</script>

<style lang="scss" scoped>
.anchor {
  display: block;
  position: sticky;
  top: 213px;
  margin-top: 213px;
  border-left: 1px solid #eee;
  min-height: 48px;

  .anchor-ul {
    position: relative;
    top: 0;
    max-width: 250px;
    border: none;
    -moz-box-shadow: 0 0 0 #fff;
    -webkit-box-shadow: 0 0 0 #fff;
    box-shadow: 0 0 0 #fff;

    li.active {
      color: #009a61;
    }
  }

  a {
    color: #333;
  }
}

.article {
  width: 100%;

  .title {
      margin: 0;
      text-align: center;
      font-size: 34px;
      font-weight: bold;
    }

  .author {
      position: relative;
      margin: 30px 0 40px;
      padding-left: 50px;
    .avatar {
        position: absolute;
        left: 0;
        top: 0;
        width: 48px;
        height: 48px;
        vertical-align: middle;
        display: inline-block;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .info {
        float: left;
        vertical-align: middle;
        // display: inline-block;
        margin-left: 8px;

        a {
          color: #333;
        }
      }

      .name {
        margin-right: 3px;
        font-size: 16px;
        vertical-align: middle;
      }

      .meta {
        margin-top: 5px;
        font-size: 12px;
        color: #969696;

        span {
          padding-right: 5px;
        }
      }

      .tags {
        float: right;
        padding-top: 15px;
        // padding-right: 20px;
        .tag {
          // padding: 0 10px;
          margin-left: 5px;
          border-right: 2px solid #eee;
        }
      }
    }
  }

  .content {
    min-height: 300px;
  }


.loader {
  color: rgb(226, 44, 44);
  text-align: center;
  padding: 50px;
  font-size: 16px;
}

.clearfix {
  clear: both;
}

.anchor-fix1 {
  display: block;
  height: 60px; /*same height as header*/
  margin-top: -60px; /*same height as header*/
  visibility: hidden;
}

</style>
