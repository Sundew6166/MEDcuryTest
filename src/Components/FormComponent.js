import { useState } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid'
import Button from 'react-bootstrap/Button';

const FormComponent = (props) => {
    const [tel, setTel] = useState('')
    const [pin, setPin] = useState('')

    const inputTel = (event) => {
        setTel(event.target.value)
    }
    const inputPin = (event) => {
        setPin(event.target.value)
    }
    const saveItem = () => {
        const itemData = {
            id: uuidv4(),
            // tel: tel,
            // pin: pin,
            ID_doctor: "001",
            date: new Date().toLocaleDateString(),
            status: false,
            softDel: false,
            time: new Date().toLocaleTimeString()
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemData)
        };
        fetch(`http://localhost:3000/bookingList?tel=${tel}&pin=${pin}`, requestOptions)
            .then(response => response.json())
        setTel('')
        setPin('')
    }
    return (
        <div style={{ textAlign: 'left' }}>
            <form onSubmit={saveItem}>
                <div className='form-container'>
                    <div>
                        <label>เบอร์ผู้ไข้</label>
                        <input type="text" required placeholder="เบอร์ผู้ไข้" onChange={inputTel} value={tel} />
                    </div>

                    <div style={{  marginLeft:10 }}>
                        <label>PIN</label>
                        <input type="password" required placeholder="PIN" onChange={inputPin} value={pin} />
                    </div>

                    <div>
                        <Button style={{ marginTop: 55, marginLeft:10 }} type="submit" variant="success">จองนัด</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormComponent