import React from 'react';
import { Checkbox, Button, FormField, Label, Pane, SelectField } from 'evergreen-ui';
import { allPatientsState, currentPatientIdState } from './atoms';
import { useRecoilState, useRecoilValue } from 'recoil';

export function SelectPatient() {
  const [patients, setPatients] = useRecoilState(allPatientsState);

  return (
    <>
      <SelectField
        value={patients.find(({ selected }) => selected)?.id || ""}
        onChange={({ target: { value } }) =>
          setPatients(patients.map(patient =>
            ({ ...patient, selected: patient.id === value })))
        }
        label='Choose Patient'>
        {[{ id: "", firstName: 'Choose', lastName: 'Patient' }, ...patients].map(({ firstName, lastName, id }) => {
          const fullName = firstName + ' ' + lastName
          return <option
            key={fullName} value={id} children={fullName}
          />
        })}
      </SelectField>
      current id {patients.filter(({ selected }) => selected)[0]?.id}
    </>
  );
}
