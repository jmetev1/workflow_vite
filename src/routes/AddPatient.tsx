import React from 'react';
import { Button } from 'evergreen-ui';
import random from '../random-name';
import { MyTextInputField, } from '../Fields';
import { useSetRecoilState } from 'recoil';
import { allPatientsState } from '../atoms';
export default function AddPatient() {
  const fName = random.first()
  const lName = random.last()
  const em = `${fName.toLowerCase()}.${lName.toLowerCase()}@gmail.com`
  const [firstName, setFirstName] = React.useState(fName);
  const [lastName, setLastName] = React.useState(lName);
  const [email, setEmail] = React.useState(em);
  const setPatients = useSetRecoilState(allPatientsState);

  const submit = () => {
    setPatients((allPatientsState) => [
      ...allPatientsState,
      {
        id: Math.random().toString(),
        firstName, lastName, email,
        notes: [],
        selected: false
      },
    ]);
  }
  return <>

    <MyTextInputField
      required
      value={firstName}
      id="firstName"
      label="First Name"
      onChange={({ target }) => setFirstName(target.value)}
    />
    <MyTextInputField
      required
      value={lastName}
      id="lastName"
      label="Last Name"
      onChange={({ target }) => setLastName(target.value)}
    />
    <MyTextInputField
      required
      value={email}
      id="email"
      label="Email Address"
      onChange={({ target }) => setEmail(target.value)}
    />
    <Button onClick={submit} appearance="primary">
      Submit
    </Button>
  </>
}


