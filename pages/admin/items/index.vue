<template>
  <a-table
    :columns="columns"
    :dataSource="list"
    :loading="loading"
  >
    <span
      slot="images"
      slot-scope="record"
    >
      <img
        :src="record.images[0].webp"
        width="100"
      >
    </span>
    <span
      slot="stock"
      slot-scope="record"
    >
      <input
        type="number"
        :value="record.stock"
        min="0"
        max="1000"
      >
    </span>
    <span slot="action">
      <a
        href="items/1"
      >詳細<a-icon type="down" /> </a>
      <a-popconfirm
        :title="alert.title"
        :okText="alert.ok"
        :cancelText="alert.cancel"
      >
        <a-button type="danger">削除</a-button>
      </a-popconfirm>
    </span>
  </a-table>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { isExpired } from '@/utils/store'

export default {
  data () {
    return {
      columns: [
        {
          title: 'ID',
          dataIndex: 'id',
          sorter: true
        },
        {
          title: 'Name',
          dataIndex: 'name'
        },
        {
          title: 'image',
          key: 'images',
          scopedSlots: { customRender: 'images' }
        },
        {
          title: 'stock',
          key: 'stock',
          scopedSlots: { customRender: 'stock' }
        },
        {
          title: 'Action',
          key: 'operation',
          fixed: 'right',
          width: 100,
          scopedSlots: { customRender: 'action' },
        }
      ],
      pagination: {},
      loading: false,
      current: 1,
      pageSize: 12,
      alert: {
        title: "本当に削除しますか？",
        ok: "はい",
        cancel: "いいえ"
      }
    }
  },
  computed: {
    ...mapGetters("item", {
      getItemList: "list"
    }),
    items() {
      return this.getItemList;
    },
    list() {
      if (!this.items.result) return null
      const begin = this.pageSize * (this.current - 1)
      const end = this.pageSize * this.current
      return this.items.result.slice(begin, end)
    }
  },
  created() {
    this.fetch();
  },
  methods: {
    ...mapActions("item", {
      fetchItemList: "fetchList"
    }),
    async fetch() {
      try {
        this.loading = true
        if (isExpired(this.items)) {
          await this.fetchItemList()
        }
      } catch(e) {
        console.log("error", e)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>