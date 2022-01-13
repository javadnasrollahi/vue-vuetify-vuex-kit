<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-card-actions>
          لیست سوالات
          <v-spacer></v-spacer>
          <v-btn to="/question/add" color="info">افزودن سوال</v-btn>
        </v-card-actions>
      </v-flex>
      <v-flex xs12>
        <v-data-table :headers="headers" :items="items" :items-per-page="5" class="elevation-1">
          <template v-slot:item.action="{ item }">
            <v-btn icon :to="`/question/namayesh/`+item.id">
              <v-icon small color="blue">fa fa-eye</v-icon>
            </v-btn>
            <v-btn icon :to="`/question/virayesh/`+item.id">
              <v-icon small color="green">fa fa-edit</v-icon>
            </v-btn>
            <v-btn icon @click="hazfSoal(item.id)">
              <v-icon small color="red">fa fa-trash</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      headers: [{
          text: 'عنوان سوال',
          align: 'center',
          value: 'title',
        },
        {
          text: 'شماره',
          value: 'id'
        },
        {
          text: 'عملیات',
          value: 'action'
        },
      ],
      items: [{
          'id': '1',
          'title': 'سوال شماره یک',
        },
        {
          'id': '2',
          'title': 'سوال شماره دو',
        },
        {
          'id': '3',
          'title': 'سوال شماره سه',
        },
        {
          'id': '4',
          'title': 'سوال شماره چهار',
        },
      ],
    }),
    methods: {
      hazfSoal(id) {
        if (confirm("آیا مطمئنید؟")) {
          this.$store.getters.axios.post("index.php", JSON.stringify({
            method: "delete",
            sql: "DELETE FROM `soal` WHERE `id`=" + id,
          })).then(res => {
            if (res.data.Code == 200) {
              let index = this.items.findIndex(e => e.id == id);
              if (index > -1) {
                this.items.splice(index, 1);
              }
            } else {
              alert(res.data.Message)
            }
          })
        }
      },
      getData() {
        this.$store.getters.axios.post("index.php", JSON.stringify({
          method: "select",
          sql: "SELECT * FROM `soal`",
        })).then(res => {
          if (res.data.Code == 200) {
            this.items = res.data.Data
          } else {
            alert(res.data.Message)
          }
        })
      },
    },
    created() {
      this.getData();
    },
  };
</script>