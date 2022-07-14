import React, { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { allPatientsState } from '../atoms';
import { Nav } from '../Nav';
import { SelectPatient } from '../SelectPatient';
import { ViewPatient } from '../ViewPatient';


export default function Diagnose() {
  // const [patient, setPatient] = useState(null);
  const patients = useRecoilValue(allPatientsState);
  console.log('diagnose', { patients });

  return (
    <Fragment>
      <SelectPatient />
      {patients.find(({ selected }) => selected) && <Outlet />}
    </Fragment>
  )
}