const container = new Vue({
    el: '#container',
    data: {
        toDo: [
            {
                id: 1,
                cosa: 'Fai la spesa',
                quando: '17:00',
                check: false
            },
            {
                id: 2,
                cosa: 'Scendi il cane',
                quando: '18:00',
                check: false
            },
            {
                id: 3,
                cosa: 'Pulisci la lettiera del gatto',
                quando: '10:00',
                check: false
            },
            {
                id: 4,
                cosa: 'Pulisci la camera da letto',
                quando: '20:00',
                check: false
            },
            {
                id: 5,
                cosa: 'Lava i piatti',
                quando: '09:00',
                check: false
            },
            {
                id: 6,
                cosa: 'Crossfit time',
                quando: '11:00',
                check: false
            },
        ],
        fatto: [],
        compito: '',
        ora: ''
    },
    methods: {
        deletedOne(index){
            this.toDo.splice(index, index + 1)
        },
        deletedTwo(index){
            this.fatto.splice(index, index + 1)
        },
        checkedOne(index){
            this.toDo[index].check = true
            console.log(this.toDo[index].check)
            setTimeout(() =>{
                this.toDo[index].check = false
                console.log(this.toDo[index].check)
                this.fatto.push(this.toDo[index])
                this.toDo.splice(index, 1) 
            }, 1500)
        },
        checkedTwo(index){
            this.fatto[index].check = true
            setTimeout(()=>{
                this.fatto[index].check = false
                this.toDo.push(this.fatto[index])
                this.fatto.splice(index, 1)
                console.log(this.check)
            }, 1500)
        },
        aggiungi(){
            if(this.compito == '' || this.ora == ''){

            } else{
                const nuovaCosa = {
                    id: this.toDo.length + 1,
                    cosa: this.compito,
                    quando: this.ora,
                }
                this.toDo.push(nuovaCosa)
                console.log(this.compito)
            }
        },

    }
})