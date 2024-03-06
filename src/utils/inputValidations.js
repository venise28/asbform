export const applicationType_validation =  {
  name: 'ApplicationType',
  label: 'Application Type',
  type: 'select',
  id: 'ApplicationType',
  placeholder: '',
  options: ['Individual', 'Family', 'Senior'],
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}


export const numOfUnits_validation =  {
  name: 'NumberOfUnits',
  label: 'Number of Units',
  type: 'select',
  id: 'NumberOfUnits',
  placeholder: 'Number of units',
  options: [1,2,3,4],
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const name_validation = {
  name: 'ApplicantName',
  label: 'Principal insured name',
  type: 'text',
  id: 'ApplicantName',
  placeholder: 'Name',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const address_validation = {
  name: 'ApplicantAddress',
  label: 'Residence Address',
  type: 'text',
  id: 'ApplicantAddress',
  placeholder: 'Your address',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 500,
      message: '500 characters max',
    },
  },
}

export const dob_validation = {
  name: 'ApplicantDOB',
  label: 'Birthdate',
  type: 'date',
  id: 'ApplicantDOB',
  placeholder: 'Birthdate',
  validation: {
    required: {
      value: true,
      message: 'Date of birth is required',
    },
    // TODO: if Individual, 13 to 65 age range.
    // TODO: if Married, 18 to 65 age range.
    // TODO: if Senior, 66 to 80.
    validate: {
      validAge: (value) => {
        const dob = new Date(value);
        const ageDiffMs = Date.now() - dob.getTime();
        const ageDate = new Date(ageDiffMs);
        const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
        if (calculatedAge < 13 || calculatedAge > 65) {
          return 'Age must be between 13 and 65';
        }
        return true;
      },
    },
  }
};

// TODO: Dynamically change the age based on the selected birthdate.
export const handleBirthdateChange = (e) => {
  const dob = new Date(e.target.value);
  const ageDiffMs = Date.now() - dob.getTime();
  const ageDate = new Date(ageDiffMs);
  const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  setValue('ApplicantAge', calculatedAge); // Update the value of the age input
};

export const age_validation = {
  name: 'ApplicantAge',
  label: 'Age',
  type: 'number',
  id: 'ApplicantAge',
  placeholder: 'Your Age',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const gender_validation =  {
  name: 'ApplicantGender',
  label: 'Gender',
  type: 'select',
  id: 'ApplicantGender',
  placeholder: 'Select Gender',
  options: ['Male', 'Female'],
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const civilStatus_validation =  {
  name: 'ApplicantCivilStatus',
  label: 'Civil Status',
  type: 'select',
  id: 'ApplicantCivilStatus',
  placeholder: 'Select status',
  options: ['Single', 'Married', 'Widowed', 'Separated'],
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const email_validation = {
  name: 'ApplicantEmail',
  label: 'email address',
  type: 'email',
  id: 'ApplicantEmail',
  placeholder: 'Personal email address',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
}

export const num_validation = {
  name: 'ApplicantContactNumber',
  label: 'Contact Number',
  type: 'number',
  id: 'ApplicantContactNumber',
  placeholder: 'Cellphone or Telephone',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const empInfo_validation =  {
  name: 'ApplicantEmployer',
  label: 'Employer',
  type: 'text',
  id: 'ApplicantEmployer',
  placeholder: 'Name/Business address/Employer',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const occupation_validation =  {
  name: 'ApplicantOccupation',
  label: 'Occupation & Livelihood',
  type: 'text',
  id: 'ApplicantOccupation',
  placeholder: 'State exact duties',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

// Beneficiary validation
// First Beneficiary
export const firstBeneficiary_validation = {
  name: 'BeneficiaryName',
  label: 'First beneficiary name',
  type: 'text',
  id: 'BeneficiaryName',
  placeholder: 'Name of first beneficiary',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}

export const fbnefRel_validation = {
  name: 'BRelationship',
  label: 'Relationship to Principal',
  type: 'text',
  id: 'BRelationship',
  placeholder: 'Relationship',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}

export const fbnefAge_validation = {
  name: 'BAge',
  label: 'Age',
  type: 'number',
  id: 'BAge',
  placeholder: 'Age of first beneficiary',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}

// Second Beneficiary
export const scndBeneficiary_validation = {
  name: 'scndBeneficiaryName',
  label: 'Second beneficiary name',
  type: 'text',
  id: 'scndBeneficiaryName',
  placeholder: 'Name of second beneficiary',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}

export const scndbnefRel_validation = {
  name: 'scndBRelationship',
  label: 'Relationship to Principal',
  type: 'text',
  id: 'scndBRelationship',
  placeholder: 'Relationship',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}

export const scndbnefAge_validation = {
  name: 'scndBAge',
  label: 'Age',
  type: 'number',
  id: 'scndBAge',
  placeholder: 'Age of second beneficiary',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}

// Third Beneficiary
export const thirdBeneficiary_validation = {
  name: 'trdBeneficiaryName',
  label: 'Third beneficiary name',
  type: 'text',
  id: 'trdBeneficiaryName',
  placeholder: 'Name of third beneficiary',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}

export const trdbnefRel_validation = {
  name: 'trdBRelationship',
  label: 'Relationship to Principal',
  type: 'text',
  id: 'trdBRelationship',
  placeholder: 'Relationship',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}

export const trdbnefAge_validation = {
  name: 'trdBAge',
  label: 'Age',
  type: 'number',
  id: 'trdBAge',
  placeholder: 'Age of third beneficiary',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}



//--------------------------------------///

//for married (family)
export const spouse_validation = {
  name: 'fstSpouse',
  label: 'Name of Spouse',
  type: 'text',
  id: 'fstSpouse',
  placeholder: 'Name of Spouse',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}

// TODO: Change Date format to mm/dd/yyyy
export const spouseDob_validation = {
  name: 'spouseDob',
  label: 'Date of birth',
  type: 'date',
  id: 'spouseDob',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}

export const fstdependent_validation = {
  name: 'fstdependent',
  label: 'Child 1',
  type: 'text',
  id: 'fstDependent',
  placeholder: 'Child 1',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}

export const fstdependentDob_validation = {
  name: 'fstdependentDob',
  label: 'Date of birth',
  type: 'date',
  id: 'fstdependentDob',
  placeholder: 'First dependent age',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}

export const snddependent_validation = {
  name: 'snddependents',
  label: 'Child 2',
  type: 'text',
  id: 'sndDependent',
  placeholder: 'Child 2',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}


export const snddependentDob_validation = {
  name: 'snddependentDob',
  label: 'Date of Birth',
  type: 'date',
  id: 'sndDependentDob',
  placeholder: 'Second dependent age',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}


export const trdDependent_validation = {
  name: 'trddependent',
  label: 'Child 3',
  type: 'text',
  id: 'trdDependent',
  placeholder: 'Child 3',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}

export const trdDependentDob_validation = {
  name: 'trdDependentDob',
  label: 'Date of birth',
  type: 'date',
  id: 'trdDependentDob',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}


// end for married

//for single (family)

export const fstParent_validation = {
  name: 'fstParentdependent',
  label: 'Name of Parent 1',
  type: 'text',
  id: 'fstParentdependent',
  placeholder: 'Parent 1 name',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}


export const fstParentDob_validation = {
  name: 'fstParentDob',
  label: 'Date of birth',
  type: 'date',
  id: 'fstParentDob',
  placeholder: 'First parent age',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}


export const sndParent_validation = {
  name: 'snddependent',
  label: 'Name of Parent 2',
  type: 'text',
  id: 'sndParentdependent',
  placeholder: 'Parent 2 Name',
  // validation: {
  //   required: {
  //     value: true,

  //     message: 'required',
  //   },
  // },
}

export const sndParentDob_validation = {
  name: 'sndParentDob',
  label: 'Date of birth',
  type: 'date',
  id: 'sndParentDob',
  placeholder: 'Second parent age',
  // validation: {
  //   required: {
  //     value: true,
  //     message: 'required',
  //   },
  // },
}






// end for single

