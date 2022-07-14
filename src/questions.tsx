import React from 'react';

export const questionContent = {
  start: {
    question: 'Patient with flu-like illness within past 48 hours?',
    yesRoute: 'rsv',
    noRoute: 'noflulike'
  },
  rsv: {
    question: 'Does patient have risk factors for complications from      respiratory syncytial virus(RSV) infections, such as:          History of stem cell transplant or solid organ transplant,          Hematologic malignancy (leukemia or lymphoma),          receiving chemotherapy,          All infants < 6 months old,          Premature infants,          Children < 2	 years old with chronic lung disease of,          prematurity or chronic heart disease,          Children with neuromuscular disorders',
    html: <>Does patient have risk factors for complications from
      respiratory syncytial virus (RSV) infections, such as:
      <ul>
        {[
          'History of stem cell transplant or solid organ transplant',
          'Hematologic malignancy (leukemia or lymphoma)',
          'receiving chemotherapy',
          'All infants < 6 months old',
          'Premature infants',
          'Children < 2	 years old with chronic lung disease of',
          'prematurity or chronic heart disease',
          'Children with neuromuscular disorders'
        ].map(item => <li key={item}>{item}</li>)}
      </ul>
    </>,
    yesRoute: '../scofr',
    noRoute: '../noflulike'
  },
  noflulike: {
    question: 'Is patient advised to undergo testing for public health, work, school, travel related reasons, or just wanted to be tested for COVID-19?'
  }
}

const el = <div>a div</div>