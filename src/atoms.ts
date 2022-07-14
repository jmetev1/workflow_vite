import { atom } from "recoil";

export const allPatientsState = atom({
  key: 'Patients',
  default: [
    {
      id: Math.random().toString(), firstName: 'John', lastName: 'Doe', email: 'jdoe@gmail.com'
    },
    {
      id: Math.random().toString(), firstName: 'Jane', lastName: 'Roberts', email: 'jrobers@hotmail.com', notes: [
        {
          question: 'Does patient have risk factors for complications from      respiratory syncytial virus(RSV) infections, such as:          History of stem cell transplant or solid organ transplant,          Hematologic malignancy (leukemia or lymphoma),          receiving chemotherapy,          All infants < 6 months old,          Premature infants,          Children < 2	 years old with chronic lung disease of,          prematurity or chronic heart disease,          Children with neuromuscular disorders',
          reply: 'Yes'
        },
        {
          question: 'Patient with flu-like illness within past 48 hours?',
          reply: 'Yes'
        }
      ]
    }
  ]
    .map(patient => ({ notes: [], ...patient, selected: false }))
});

