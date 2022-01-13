<template>
  <v-container>
    <v-layout row wrap  class="mx-4">
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
        <v-btn color="success" @click="afzodanSoal">افزودن سوال</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      title:"",
      choice1:"",
      choice2:"",
      choice3:"",
      choice4:"",
      answer:"",
    }),
    methods :{
      afzodanSoal(){
        if(this.title.length < 1){
          return;
        }
        var sql = "INSERT INTO `soal`";
        sql += "(`id`, `title`, `choice1`, `choice2`, `choice3`, `choice4`, `answer`)"
        sql += "VALUES (NULL, '"+this.title+"', '"+this.choice1+"', '"+this.choice2+"', '"+this.choice3+"', '"+this.choice4+"', '"+this.answer+"');"
        this.$store.getters.axios.post("index.php", JSON.stringify({
          method: "insert",
          sql: sql,
        })).then(res => {
          if (res.data.Code == 200) {
            alert(res.data.Message)
            this.title = "" ;
            this.choice1 = "" ;
            this.choice2 = "" ;
            this.choice3 = "" ;
            this.choice4 = "" ;
            this.answer = "" ;
          } else {
            alert(res.data.Message)
          }
        })
      }
    },
  };
</script>