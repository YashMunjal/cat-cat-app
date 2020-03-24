var app=new Vue({ 
    el: '#app',
    data: {
        breeds:{length:1},
        breed_loop: [
            { name:'',id:''
        }],
        breed_para:{
            wikipedia_url:'',
            description:'Cat Description Here'
        },
        image:{
            url:'./images/header.jpg'
        }
    },
    created(){
        this.getBreeds();
    } ,
    methods:{
        async getBreeds()
            {
                try{
                    axios.defaults.headers.common['x-api-key'] = "f9953fed-2ecd-479b-bc01-eaa09768fc9e" 
                    //api key to be in env soon
                    let response1 = await axios.get('https://api.thecatapi.com/v1/breeds/' ) 
                    this.breeds = response1.data;
                    for(var i=0;i<this.breeds.length;i++)
                    {
                        app.breed_loop.push({name:response1.data[i].name,id:response1.data[i].id})
                    }

                }catch(err){
                    console.log(err)
                }
            },
            async selectedValue(event) {
                try{
                    
                    axios.defaults.headers.common['x-api-key'] = "f9953fed-2ecd-479b-bc01-eaa09768fc9e" 
                    
                    let sentQuery = await axios.get('https://api.thecatapi.com/v1/images/search?breed_id='+event.target.value )
                    this.breed_para=sentQuery.data[0].breeds[0]
                    this.image=sentQuery.data[0]

                }catch(err)
                {
                    console.log(err)
                }
            }

    }
})