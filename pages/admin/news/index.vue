<template>
  <a-table
    :columns="columns"
    :dataSource="list"
    :loading="loading"
  >
    <span
      slot="webp"
      slot-scope="record"
    >
      <img
        :src="record.webp"
        width="100"
      >
    </span>
    <span slot="action">
      <a
        href="#"
        class="ant-dropdown-link"
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
          title: 'Title',
          dataIndex: 'title'
        },
        {
          title: 'image',
          key: 'webp',
          scopedSlots: { customRender: 'webp' }
        },
        {
          title: 'Category',
          dataIndex: 'category'
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
    ...mapGetters("news", {
      getNewsList: "list"
    }),
    news() {
      return this.getNewsList;
    },
    list() {
      if (!this.news.result) return null
      const begin = this.pageSize * (this.current - 1)
      const end = this.pageSize * this.current
      return this.news.result.slice(begin, end)
    }
  },
  created() {
    this.fetch();
  },
  methods: {
    ...mapActions("news", {
      fetchNewsList: "fetchList"
    }),
    async fetch() {
      try {
        this.loading = true
        if (isExpired(this.news)) {
          await this.fetchNewsList()
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