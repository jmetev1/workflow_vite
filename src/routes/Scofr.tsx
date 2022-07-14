import React, { Fragment, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Scofr() {

  return (
    <div>
      Order SCOFR / Severe Acute Respiratory
      Syndrome Coronavirus 2 (SARS-CoV-2)
      RNA, Influenza Virus Type A and Type B
      RNA, and Respiratory Syncytial Virus RNA
      Detection, PCR, Varies
      OR
      Consider RP / Respiratory Panel, PCR,
      Nasopharyngeal
      OR
      If patient is negative for SARS-CoV-2 RNA
      and influenza A and B RNA, order RSVQL /
      Respiratory Syncytial Virus RNA Detection,
      PCR, Varies
      Start empiric antiviral therapy
      for influenza if clinically indicated.
      <NavLink
        to={'/'}
        style={{
          width: '100%',
          textDecoration: 'none',
          color: 'unset',
        }}
      >
        Order now;
      </NavLink>
    </div>
  )
}


