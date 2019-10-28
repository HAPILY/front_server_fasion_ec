<template>
  <a-table
    :columns="columns"
    :dataSource="data"
    :loading="loading"
  >
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
        { id: 1, name: "Chandler Bing", birthday: '1996-05-19', mail: 'hasegawa@hitokuse.com', tel: '305-917-1301', zipcode: '663-8122', address: '兵庫県西宮市小曽根町1-5-28' },
        { id: 2, name: "Ross Geller", birthday: '1996-05-19', mail: 'hasegawa@hitokuse.com', tel: '210-684-8953', zipcode: '663-8122', address: '兵庫県西宮市小曽根町1-5-28' },
        { id: 3, name: "Rachel Green", birthday: '1996-05-19', mail: 'hasegawa@hitokuse.com', tel: '765-338-0312', zipcode: '663-8122', address: '兵庫県西宮市小曽根町1-5-28' },
        { id: 4, name: "Monica Geller", birthday: '1996-05-19', mail: 'hasegawa@hitokuse.com', tel: '714-541-3336', zipcode: '663-8122', address: '兵庫県西宮市小曽根町1-5-28' },
        { id: 5, name: "Joey Tribbiani", birthday: '1996-05-19', mail: 'hasegawa@hitokuse.com', tel: '972-297-6037', zipcode: '663-8122', address: '兵庫県西宮市小曽根町1-5-28' },
        { id: 6, name: "Phoebe Buffay", birthday: '1996-05-19', mail: 'hasegawa@hitokuse.com', tel: '760-318-8376', zipcode: '663-8122', address: '兵庫県西宮市小曽根町1-5-28' }
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
          title: 'Birthday',
          dataIndex: 'birthday'
        },
        {
          title: 'Mail',
          dataIndex: 'mail'
        },
        {
          title: 'Tel',
          dataIndex: 'tel'
        },
        {
          title: 'Zipcode',
          dataIndex: 'zipcode'
        },
        {
          title: 'Address',
          dataIndex: 'address'
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

<style lang="scss" scoped>
table {
  font-family: 'Open Sans', sans-serif;
  width: 1000px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 50px auto;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}
</style>