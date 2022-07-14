import React from 'react';
import { SelectField } from 'evergreen-ui';

import { useState } from 'react';
import { SelectPatient } from './SelectPatient';
import { useRecoilState } from 'recoil';
import { allPatientsState } from './atoms';

export function Notes() {
  const [patients, setPatients] = useRecoilState(allPatientsState);
  const selectedPatient = patients.find(({ selected }) => selected);
  console.log({ selectedPatient })
  console.log(selectedPatient?.notes)
  return (
    <>
      <SelectPatient />
      {selectedPatient &&
        <div>
          <h1>Name:{selectedPatient.firstName + ' ' + selectedPatient.lastName}</h1>
          <p>{selectedPatient.email}</p>
          <div>notes</div>
          {selectedPatient.notes && selectedPatient.notes.map(({ question, reply }) =>
            <div key={question}>{question}: {reply}</div>
          )}
        </div>
      }
    </>
  );
}

/*
64 miles per day
 57 cents is 37/day *4 148/week 
 might get 20/day from turo *7 = 140  /week 
*/