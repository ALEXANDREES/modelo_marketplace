<template>
  <div class="q-pa-md col-12">
    <q-table
      :grid="$q.screen.sm || $q.screen.xs"
      dark
      class="text-primary"
      style="background-color: #21222c; font-color: #fff"
      :rows="getListProducts"
      :columns="columns"
      :pagination="initialPagination"
      rows-per-page-label="Items por página"
      no-data-label="Não há dados disponíveis."
      no-results-label="A busca não retornou nenhum resultado."
      row-key="name"
      :filter="filter"
    >
      <template v-slot:top-right>
        <q-input input-class="text-primary" :style="$q.screen.gt.sm ? 'width:300px' : 'width:257px'" outlined dense debounce="300" v-model="filter" placeholder="Pesquisar">
          <template v-slot:append>
            <q-icon color="primary" name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:top-left>
        <q-btn
          class="bg-primary col-12 text-white text-bold q-mb-lg q-mt-md"
          icon="add"
          @click="openAddProduct()"
          flat
          label="Novo Produto"
          :style="$q.screen.gt.sm ? 'width:300px' : 'width:257px'"
        />
      </template>

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th 
            v-for="col in props.cols" :key="col.name" :props="props"
            class="text-primary"
          >
            {{ col.label }}
          </q-th>
          <q-th auto-width />
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td 
            v-for="col in props.cols" :key="col.name" :props="props"
            class="text-secondary"
          >
            {{ col.value }}
          </q-td>
          <q-td auto-width class="q-gutter-x-xs">
            <q-btn
              class="bg-secondary text-white text-bold"
              icon="edit"
              @click="openEdit(props.row)"
              size="sm"
              flat
            />
          </q-td>
        </q-tr>
      </template>

      <template v-slot:item="props">
        <div
          class="q-my-sm q-pa-xs col-xs-12 col-sm-12 col-md-12 col-lg-3 grid-style-transition"
        >
          <q-card>
            <q-list dense>
              <q-item
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
              >
                <q-item-section>
                  <q-item-label class="text-primary text-bold">{{ col.label }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label class="text-secondary" caption>
                      {{ col.value }}
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-primary text-bold">Ações</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-btn
                    class="bg-primary text-primary text-bold"
                    icon="edit"
                    color="white"
                    @click="openEdit(props.row)"
                    size="sm"
                    flat
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
          <q-separator class="q-my-md" />
        </div>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapActions, mapGetters, mapState } from 'vuex';

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
          name: 'description',
          required: true,
          label: 'Descrição',
          align: 'left',
          field: row => row.description,
          sortable: true
        },
        {
          name: 'inventory',
          required: true,
          label: 'Estoque',
          align: 'left',
          field: row => row.inventory,
          sortable: true
        },
        {
          name: 'price',
          required: true,
          label: 'Preço',
          align: 'left',
          field: row => row.price,
          sortable: true,
          format: val =>
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(val)
        }
      ],
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        rowsPerPage: 15
        // rowsNumber: xx if getting data from a server
      }
    }
  },
  async mounted () {
    await this.getProducts()
    console.log(this.getListProducts)
  },
  computed: {
    ...mapState('user', ['user']),
    ...mapGetters('products', ['getListProducts'])
  },
  methods: {
    ...mapActions('products', ['getProducts']),
    openAddProduct () {

    },
    openEdit (row) {

    }
  }
}
</script>
