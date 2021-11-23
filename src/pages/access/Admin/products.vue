<template>
  <div class="q-pa-md col-12">
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filter"
    >
      <template v-slot:top-right>
        <q-input style="width:300px" outlined dense debounce="300" v-model="filter" placeholder="Pesquisar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template :body-cell="props">
        <q-td :props="props">
          <q-item-label>
            {{ props.value }}
          </q-item-label>
        </q-td>
      </template>

      <!-- <template v-slot:body-cell-name="props">
        <q-td auto-width class="q-gutter-x-xs">
          <q-btn
            class="bg-primary text-white text-bold"
            label="Selecionar"
            no-caps
            size="sm"
          />
        </q-td>
      </template> -->
    </q-table>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
        filter: ref(''),
        columns: [
            {
                name: 'name',
                required: true,
                label: 'Nome',
                align: 'left',
                field: row => row.name,
                sortable: true
            },
            {
                name: 'name',
                required: true,
                label: 'Descrição',
                align: 'left',
                field: row => row.name,
                format: val => `${val}`,
                sortable: true
            },
            {
                name: 'name',
                required: true,
                label: 'Quantidade',
                align: 'left',
                field: row => row.name,
                format: val => `${val}`,
                sortable: true
            },
            {
                name: 'name',
                required: true,
                label: 'Preço',
                align: 'left',
                field: row => row.name,
                format: val => `${val}`,
                sortable: true
            },
        ],

        rows: [
            {
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                sodium: 87,
                calcium: '14%',
                iron: '1%'
            }
        ]
    }
  }
}
</script>
