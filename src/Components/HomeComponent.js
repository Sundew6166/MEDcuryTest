import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import TableComponent from "./TableComponent";

function HomeComponent() {
  let [disableDate, setDisableDate] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [booking, setBook] = useState([]);
  const DropDownChange = (event) => {
    const value = event.target.value;
    disableDate = value === '0' ? setDisableDate(false) : setDisableDate(true)
    setSelectValue(value);
  };

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const changeStartDate = (event) => {
    const value = event.target.value;
    setStartDate(value);
  }

  const changeEndDate = (event) => {
    const value = event.target.value;
    setEndDate(value);
  }
  const Refresh = () => {
    setStartDate();
    setEndDate();
  }
  
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/bookingList");
        setBook(data)
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      {/* Head */}
      <h1 >ปฏิทินการทำงาน</h1>
      {/* Dropdown DatePicker RefreshButton */}
      <div style={{ marginBottom: 10, display: 'flex' }}>
        <div>
          <select onChange={DropDownChange} style={{ fontSize: '25px', width: '150px', marginRight: 10 }}>
            <option value="0">ทั้งหมด</option>
            <option value="001">หมอ ก</option>
            <option value="002">หมอ ข</option>
          </select>
        </div>

        <div style={{ display: '-webkit-box', width: 170 }}>
          <label style={{ marginRight: 10 }}>วันเริ่มต้น :</label>
          <input style={{ marginRight: 10 }} type="date" onChange={changeStartDate} disabled={disableDate} />
          <label style={{ marginRight: 10 }}>วันสิ้นสุด :</label>
          <input style={{ marginRight: 10 }} type="date" onChange={changeEndDate} disabled={disableDate} />
          <Button onClick={Refresh} type="submit" variant="outline-primary" disabled={disableDate} >รีเฟรช</Button>
        </div>
      </div>
      {/* Table */}
      <div style={{ marginBottom: 10 }}>
        {
          (() => {
            if (selectValue === '001') {
              return <TableComponent items={booking.filter(item => (item.ID_doctor === '001' && item.softDel !== true))} />
            } else if (selectValue === '002') {
              return <TableComponent items={booking.filter(item => (item.ID_doctor === '002' && item.softDel !== true))} />
            } else {
              return (
                startDate !== undefined || endDate !== undefined ?
                  <TableComponent items=
                    {booking.filter(item => item.softDel === false &&
                      (new Date(item.date).toLocaleDateString() >= new Date(startDate).toLocaleDateString() &&
                        new Date(item.date).toLocaleDateString() <= new Date(endDate).toLocaleDateString())
                    )} />
                  : <TableComponent items={booking.filter(item => (item.softDel === false))}
                  />
              )
            }
          })()
        }
      </div>
    </div>
  );
}

export default HomeComponent;