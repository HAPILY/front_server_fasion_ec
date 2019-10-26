<template>
  <a-table
    :columns="columns"
    :dataSource="items"
    :loading="loading"
  >
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
        href="#"
        class="ant-dropdown-link"
      >詳細<a-icon type="down" /> </a>
      <a-button type="danger">削除</a-button>
    </span>
  </a-table>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { id: 1, name: "Chandler Bing", stock: 2, content: 'これはいい物です。'},
        { id: 2, name: "Ross Geller", stock: 1, content: 'これはいい物です。'},
        { id: 3, name: "Rachel Green", stock: 2, content: 'これはいい物です。'},
        { id: 4, name: "Monica Geller", stock: 2, content: 'これはいい物です。'},
        { id: 5, name: "Joey Tribbiani", stock: 2, content: 'これはいい物です。'},
        { id: 6, name: "Phoebe Buffay", stock: 2, content: 'これはいい物です。'}
      ],
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
          title: 'content',
          dataIndex: 'content'
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
      loading: false
    }
  }
}
</script>

<style lang="scss" scoped></style>