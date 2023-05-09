const {createApp}= Vue;
createApp({
        data(){
            return{
                dischiArray:[],
                infoShowed:[],
                
  
            }
        },
        mounted(){
            axios.get('http://localhost/boolean/php-dischi-json/server.php')
            .then( (resp)=>{
                this.dischiArray= resp.data.results;
             
            })
        },

}).mount('#app')