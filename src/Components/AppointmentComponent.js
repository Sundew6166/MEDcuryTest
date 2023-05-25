import { useState, useEffect } from 'react'
import "./AppointmentComponent.css"
import Table from 'react-bootstrap/Table';
import axios from "axios";

function AppointmentComponent() {
    const [id, setID] = useState('')
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/bookingList/?ID_doctor=${id}&status=false`);
                setDoctors(data)
            } catch (err) {
                console.error(err);
            }
        };
        fetch();
    }, [id]);
    const inputID = (event) => {
        setID(event.target.value)
    }
    return (
        <div>
            <h1 >รายการนัดคนไข้</h1>

            <div className='textBox'>
                <div>
                    <input type="text" style={{ marginRight: 10 }} required placeholder="ID" onChange={inputID} value={id} />
                </div>
            </div>

            <div>
                <Table striped bordered hover style={{ marginTop: 10 }}>
                    <thead>
                        <tr>
                            <th>เดือน / วัน / ปี</th>
                            <th>เวลา</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((element) => {
                            return (
                                <tr key={element.id}>
                                    <td>{element.date}</td>
                                    <td>{element.time}</td>
                                </tr>
                            );
                        })}
                    </tbody>

                </Table>

            </div>


        </div>
    );
}
export default AppointmentComponent;