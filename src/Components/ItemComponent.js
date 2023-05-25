import Button from 'react-bootstrap/Button';
import React from "react";

const ItemComponent = (props) => {
    const { id, date, time, ID_doctor, status } = props
    const BookingDelete = () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({date: date, time: time, ID_doctor: ID_doctor, status: status, softDel: true })
        };
        fetch('http://localhost:3000/bookingList/' + id, requestOptions)
            .then(response => response.json())
    }

    const Booking = () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({date: date, time: time, ID_doctor: ID_doctor, status: false, softDel: false })
        };
        fetch('http://localhost:3000/bookingList/' + id, requestOptions)
            .then(response => response.json())
    }
    return (
        <tr key={id}>
            <td>{date}</td>
            <td>{time}</td>
            <td>{ID_doctor === '001' ? 'ก' : 'ข'}</td>
            <td>
                {
                    (() => {
                        if (status) {
                            return (
                                <Button onClick={Booking} type="submit" variant="outline-success">ว่าง</Button>
                            )
                        } else {
                            return (
                                <Button onClick={BookingDelete} type="submit" variant="outline-danger">ไม่ว่าง</Button>
                            )
                        }
                    })()
                }
            </td>
        </tr>
    );
}

export default ItemComponent;