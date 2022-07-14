import { Heading } from 'evergreen-ui';
import React, { Fragment, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './pretty_link.css';

export const Home = () => {
  const rowStyle = {
    display: 'flex',
    flex: '1 1 50%'
  }
  const square = '75vw'
  return (
    <div
      className='square'
      style={{
        flexDirection: 'column',
        width: square,
        height: square,
        display: 'flex',
        margin: 'auto',
      }}
    >
      <div style={rowStyle}>
        <PrettyLink
          label='Patient'
          url='rsv'
        />
        <PrettyLink
          label='Practice'
          url='rsv'
        />
      </div>
      <div style={rowStyle}>
        <PrettyLink
          label='RP'
          url='rsv'
        />
        <PrettyLink
          label='UTI'
          url='rsv'
        />
      </div>
    </div>
  )
}



const PrettyLink = ({ label, url }) => (
  < NavLink
    key={label}
    to={`/${url}`}
    style={{ flex: `1 1 50%` }}
    className="icon"
  >
    <div className="shine" />

    <Heading style={{ textAlign: 'center' }} size={900}>{label}</Heading>
  </NavLink>
)
