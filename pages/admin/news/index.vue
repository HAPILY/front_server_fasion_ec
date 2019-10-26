<template>
  <a-table
    :columns="columns"
    :dataSource="data"
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
      <a-button type="danger">削除</a-button>
    </span>
  </a-table>
</template>

<script>
export default {
  data () {
    return {
      data: [
        { id: 1, title: "Chandler Bing", webp: 'https://fashion-ec-web.s3-ap-northeast-1.amazonaws.com/uploads/items/src/18/lunch_time_for.webp', content: 'ニュースです！これはですね。。', category: 'セールス'},
        { id: 2, title: "Ross Geller", webp: 'https://fashion-ec-web.s3-ap-northeast-1.amazonaws.com/uploads/items/src/18/lunch_time_for.webp', content: 'ニュースです！これはですね。。', category: 'セールス'},
        { id: 3, title: "Rachel Green", webp: 'https://fashion-ec-web.s3-ap-northeast-1.amazonaws.com/uploads/items/src/18/lunch_time_for.webp', content: 'ニュースです！これはですね。。', category: 'セールス'},
        { id: 4, title: "Monica Geller", webp: 'https://fashion-ec-web.s3-ap-northeast-1.amazonaws.com/uploads/items/src/18/lunch_time_for.webp', content: 'ニュースです！これはですね。。', category: 'セールス'},
        { id: 5, title: "Joey Tribbiani", webp: 'https://fashion-ec-web.s3-ap-northeast-1.amazonaws.com/uploads/items/src/18/lunch_time_for.webp', content: 'ニュースです！これはですね。。', category: 'セールス'},
        { id: 6, title: "Phoebe Buffay", webp: 'https://fashion-ec-web.s3-ap-northeast-1.amazonaws.com/uploads/items/src/18/lunch_time_for.webp', content: 'ニュースです！これはですね。。', category: 'セールス'}
      ],
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
      loading: false
    }
  }
}
</script>

<style lang="scss" scoped></style>