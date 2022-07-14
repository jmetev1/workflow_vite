import React from 'react';
import { Checkbox, Button, FormField, Label, Pane, SelectField } from 'evergreen-ui';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { allPatientsState } from './atoms';

export function AllPatients() {
  // const [selectedPatient, setSelectedPatient] = useState(null);
  const patients = useRecoilValue(allPatientsState);
  console.log('all patients', { patients });

  return (
    <>
      {patients.map(patient => {
        // console.log({ patient });
        return <div key={patient.id}>
          <h1>Name:{patient.firstName + ' ' + patient.lastName}</h1>
          <p>{patient.email}</p>
        </div>
      }
      )}
    </>
  );
}
