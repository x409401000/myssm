import VueRouter from 'vue-router'

/*创建一个路由*/
export default new VueRouter({
    routes:[
        {
            path:'/',
            component:()=>import ('@/pages/mainMenu/MainMenu.vue') 
        },
        {
            path:'/home',
            component:()=>import ('@/pages/mainMenu/MainMenu.vue') 
        },
        {
            path:'/readcardMenu',
            component:()=>import ('@/pages/readCard/ReadCardMenu.vue') 
        },
        {
            path:'/ReadShenFenzheng',
            component:()=>import ('@/pages/readCard/ReadShenFenzheng.vue') 
        },
        {
            path:'/ClinicDeptList',
            component:()=>import ('@/pages/regist/ClinicDeptList.vue') 
        }
        ,
        {
            path:'/ClinicDoctorList',
            component:()=>import ('@/pages/regist/ClinicDoctorList.vue') 
        }
        ,
        {
            path:'/RegistPay',
            component:()=>import ('@/pages/regist/RegistPay.vue') 
        } ,
        {
            path:'/PayResult',
            component:()=>import ('@/pages/regist/PayResult.vue') 
        }
    ]
})

