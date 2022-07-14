import React from 'react';
import { Button, HomeIcon } from 'evergreen-ui';

import { NavLink } from 'react-router-dom';

export const Nav = () => {

  return (
    <nav style={{ display: 'flex', flexWrap: 'wrap' }}>
      {[
        { label: 'Home', url: 'home', iconAfter: HomeIcon },
        { label: 'Add Patient', url: 'addpatient', iconAfter: null },
        { label: 'Diagnose', url: 'diagnose', iconAfter: null },
        { label: 'Notes', url: 'notes', iconAfter: null },
      ].map(({ label, url, iconAfter }) => (
        <NavLink
          key={label}
          to={`/${url}`}
          style={{ flex: `1 1 25%`, }}
        >{({ isActive }) => {

          return (
            <Button
              key={label}
              marginY={8}
              marginRight={12}
              iconBefore={iconAfter}
              appearance={isActive ? 'primary' : 'default'}
              style={{ width: '100%', flex: '1 1 33%' }}
              height={56}
            >
              <span style={{ margin: 'auto' }}>{label}</span>
            </Button>
          )
        }}</NavLink>)
      )}
    </nav >
  );
};

