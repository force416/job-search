<template>
    <div v-loading.body="isLoadData">
        <el-row :gutter="20">
            <el-col :span="8" :offset="0">
                <div class="el-icon-arrow-down"> 共 {{ totalCount }} 筆資料</div>
            </el-col>
        </el-row>
        <waterfall :line="line" :line-gap="200" :min-line-gap="180" :max-line-gap="220" :watch="items" @reflowed="reflowed" ref="waterfall">
            <waterfall-slot v-for="(item, index) in items" :width="item.width" :height="item.height" :order="index" :key="item.J">
                <div class="item" :style="item.style" :index="item.index">
                    <div>
                        <el-tag>職缺</el-tag>
                        {{ item.JOB }}
                    </div>
                    <div>
                        <el-tag>公司</el-tag>
                        {{ item.NAME }}
                    </div>
                    <div>
                        <el-tag>薪水</el-tag>
                        {{ parseSalary(item.SAL_MONTH_LOW, item.SAL_MONTH_HIGH) }}
                    </div>
                    <div>
                        <el-tag>地點</el-tag>
                        {{ item.JOB_ADDR_NO_DESCRIPT }}
                    </div>
                    <p>
                        <el-button @click="link104Page(item.J)" type="primary" icon="search">詳細資訊</el-button>
                    </p>
                </div>
            </waterfall-slot>
        </waterfall>
    </div>
</template>

<script>
import Vue from 'vue';
import { Waterfall, WaterfallSlot } from 'vue-waterfall';

import config from '../config/config.js'

export default {
    data: function () {
        return {
            line: 'h',
            count: 0,
            items: [],
            isLoadData: false,
            page: 1,
            totalCount: 0
        }
    },
    mounted: function () {
        this.getJobInfo(this.page, 50);
    },
    components: {
        Waterfall,
        WaterfallSlot
    },
    methods: {
        getJobInfo: function (page, pgsz) {
            this.isLoadData = true;
            // 參考 http://www.104.com.tw/i/api_doc/jobsearch/documentation.cfm#this
            const formData = {
                // cat: 2007001006, //職務類別
                role: '1,4',     //全職
                fmt: 8,          //輸出格式 JSON
                cols: 'J,JOB,NAME,ADDRESS,DESCRIPTION,JOB_ADDR_NO_DESCRIPT,SAL_MONTH_LOW,SAL_MONTH_HIGH', //輸出欄位
                page: page,      //頁數
                totalPage: 0,     //總頁數
                pgsz: pgsz,      //每頁筆數
                kws: 'java',     //關鍵字
                kwop: 2,        //關鍵字查詢範圍
                area: 6001001000 //地點 = 台北市全部
            };
            const url = 'http://www.104.com.tw/i/apis/jobsearch.cfm';

            Vue.http.get(config.CORS_PROXY + url, { params: formData }).then(response => {

                let result = response.body;

                result.data.forEach(function (element) {
                    element.width = 700;
                    element.height = 300;
                    element.style = {
                        background: this.getRandomColor()
                    }
                }, this);

                if (this.items.length > 0) {
                    this.items.push.apply(this.items, result.data)
                }
                else {
                    this.totalCount = result.RECORDCOUNT;
                    this.totalPage = result.TOTALPAGE;
                    this.items = result.data;
                }
            });
        },
        getRandomColor: function () {
            var colors = [
                '#F9FAFC'
            ]
            return colors[~~(Math.random() * colors.length)]
        },
        reflowed: function () {
            this.isLoadData = false
        },
        addItems: function () {
            if (!this.isLoadData) {
                this.isLoadData = true;
                this.page = this.page + 1;
                this.getJobInfo(this.page, 50);
            }
        },
        onScroll: function () {
            //scroll to bottom
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                if (!(this.page >= this.totalPage)) {
                    this.addItems();
                }
            }
        },
        parseSalary: function (sal_low, sal_high) {
            sal_low = parseInt(sal_low);
            sal_high = parseInt(sal_high);
            if ((sal_low + sal_high) === 0) {
                return '面議';
            }
            return String(sal_low) + " ~ " + String(sal_high);
        },
        link104Page: function (id) {
            window.open(config.JOB_PAGE_URL + '?j=' + id);
        }
    },
    created: function () {
        window.addEventListener('scroll', this.onScroll);
    }
}
</script>

<style>
div {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

body {
    margin: 5px;
    font-family: Helvetica, sans-serif;
}

.item {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    font-size: 1.2em;
    color: rgb(0, 158, 107);
    padding-left: 10px;
    padding-top: 10px;
}

.item div {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
}

.item:after {
    content: attr(index);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

.wf-transition {
    transition: opacity .3s ease;
    -webkit-transition: opacity .3s ease;
}

.wf-enter {
    opacity: 0;
}
</style>
