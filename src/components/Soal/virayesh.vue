<template>
  <v-container>
    <v-layout row wrap class="mx-4">
      <v-flex xs12>
        <v-text-field
          label="عنوان سوال"
          outlined
          dense
          v-model="title"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="گزینه 1"
          outlined
          dense
          v-model="choice1"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="گزینه 2"
          outlined
          dense
          v-model="choice2"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="گزینه 3"
          outlined
          dense
          v-model="choice3"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="گزینه 4"
          outlined
          dense
          v-model="choice4"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="جواب سوال"
          outlined
          dense
          v-model="answer"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-btn color="success" @click="virayeshSoal">ویرایش سوال</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      id:"",
      title:"",
      choice1:"",
      choice2:"",
      choice3:"",
      choice4:"",
      answer:"",
    }),
    methods :{
      virayeshSoal(){
        if(this.title.length < 1){
          return;
        }
        var sql = "UPDATE `soal` SET";
        sql += "`title`='"+this.title+"',`choice1`='"+this.choice1+"',`choice2`='"+this.choice2+"',`choice3`='"+this.choice3+"',`choice4`='"+this.choice4+"',`answer`='"+this.answer+"' "
        sql += "WHERE `id` = '"+this.id+"';"
        this.$store.getters.axios.post("index.php", JSON.stringify({
          method: "update",
          sql: sql,
        })).then(res => {
          if (res.data.Code == 200) {
            alert(res.data.Message)
          } else {
            alert(res.data.Message)
          }
        })
      }
    },
    created() {
      let ID = this.$route.params.id;
      this.id = ID
      var sql = "SELECT * FROM `soal`";
      sql     += " WHERE `id`="+this.id;
      this.$store.getters.axios.post("index.php", JSON.stringify({
        method: "selectRow",
        sql: sql,
      })).then(res => {
        if (res.data.Code == 200) {
          this.id = res.data.Data.id;
          this.title = res.data.Data.title;
          this.choice1 = res.data.Data.choice1;
          this.choice2 = res.data.Data.choice2;
          this.choice3 = res.data.Data.choice3;
          this.choice4 = res.data.Data.choice4;
          this.answer = res.data.Data.answer;
        } else {
          alert(res.data.Message)
        }
      })
    },
  };
</script>