import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import "./Appointment.css"
const AppointmentsByDate = ({ appointment }) => {
  console.log(appointment)
  console.log(appointment)
  return (
    <div class="background">
      <div>
        
        <Table border="1" align="center" className="text-center mr-3">
          <Thead>
            <Tr>
              <Th>Patient Name</Th>
              <Th>Appointment Date</Th>
              <Th>Phone Number</Th>
            </Tr>
          </Thead>
          <Tbody>
            {appointment.map((data) => (
              <Tr>
                <Td>{data.name}</Td>
                <Td>{data.date}</Td>
                <Td>{data.phoneNumber}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  )
}

export default AppointmentsByDate
