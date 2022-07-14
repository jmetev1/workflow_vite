import { BanCircleIcon, TickCircleIcon } from 'evergreen-ui';
import React, { Fragment, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
require('./question.css')

export default function FinalState({ html, }) {
  return (
    <>
      <div className="question">
        {html}
      </div>
      {/* <div className="parent">
        
      </div> */}
    </>
  )
}


