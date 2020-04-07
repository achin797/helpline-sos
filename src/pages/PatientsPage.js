import React, {useState, useEffect} from 'react';
import { Table } from 'antd';
import axios from 'axios';

function PatientsPage () {
  const [data, setData] = useState([]);
  const [tablePagination, setTablePagination] = useState({});
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: name => `${name.first} ${name.last}`,
      width: '20%',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      width: '20%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (params = {}) => {
    setLoading(true);

    axios.get('https://randomuser.me/api', {
      params: {
        results: 10,
        ...params,
      }
    }).then(result => {
      const pager = {...tablePagination};
      // Read total count from server
      // pagination.total = data.totalCount;
      pager.total = 200;
      setLoading(false);
      setData(result.data.results);
      setTablePagination(pager);
      console.log(pager);
    });
  };

  const handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...tablePagination };
    pager.current = pagination.current;
    setTablePagination(pager);


    //fetch the data with updated table values. Specifically current page, number of results, and sorter(field and order) value(asc/desc)
    fetchData({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

  return (
    <>
      <Table
        columns={columns}
        rowKey={record => record.login.uuid}
        dataSource={data}
        pagination={tablePagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </>);
}

export default PatientsPage;