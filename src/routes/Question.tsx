import { BanCircleIcon, TickCircleIcon } from 'evergreen-ui';
import React, { Fragment, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { allPatientsState } from '../atoms';
// require('./question.css')
interface QuestionProps {
  question: string;
  html?: JSX.Element,
  yesRoute: string,
  noRoute: string
}

export default function Question({ question, html, yesRoute, noRoute }: QuestionProps) {
  const [patients, setPatients] = useRecoilState(allPatientsState);
  const addNote = (reply: string) => {
    const selectedPatient = patients.find(({ selected }) => selected);
    setPatients(patients.map(patient => {
      const { selected, notes } = patient;
      console.log('adding note')
      if (selected) {
        const newNotes = [...notes]
        newNotes.push({ question, reply })
        console.log({ newNotes })
        return { ...patient, notes: newNotes }
      }
      return patient;
    }))
  }

  return (
    <>
      <div className="question">
        {html || question}
      </div>
      <div className="parent">
        <Link
          to={yesRoute || 'nomatch'}
          onClick={() => {
            addNote('yes')
          }}
          className="child"
        >
          <span className="icon" >
            <TickCircleIcon size={60} color="success" />
            <div className="reply">Yes</div>
          </span>
        </Link>
        <Link
          to={noRoute || '../nomatch'}
          className="child"
          onClick={() => addNote('no')}
        >
          <span className="icon"  >
            <BanCircleIcon size={60} color="danger" />
            <div className="reply" >              No            </div>
          </span>
        </Link>
      </div>
    </>
  )
}


