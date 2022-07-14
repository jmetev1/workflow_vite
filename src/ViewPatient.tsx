import React from 'react';
import { Checkbox, Button, FormField, Label, Pane, SelectField } from 'evergreen-ui';
import { useState } from 'react';

export function ViewPatient({ setPatient }) {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const { patients } = window;

  return (
    <>
      <SelectField onChange={(thing) => {
        console.log({ value: thing.target.value })
        window.currentPatientId = thing.target.value;
        // setSelectedPatient(window.patients.filter(patient => patient.lastName === thing.target.value)[0])
      }}
        label='Choose Patient'>
        {[{ _id: 0, firstName: 'Choose', lastName: 'Patient' }, ...patients].map(
          ({ firstName, lastName, id }) => {
            const fullName = firstName + ' ' + lastName
            return <option key={fullName} value={id} children={fullName} />
          }
        )}
      </SelectField>
      {selectedPatient &&
        <div>
          <h1>Name:{selectedPatient.firstName + ' ' + selectedPatient.lastName}</h1>
          <p>{selectedPatient.email}</p>
        </div>
      }
    </>
  );
}
