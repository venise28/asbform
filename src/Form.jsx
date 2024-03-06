import { Input } from './components'
import { FormProvider, useForm, Controller } from 'react-hook-form'

import { useState} from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { Select } from './components/Input'
import  CrudServices from './Services/CrudServices'
import * as validators from './utils/inputValidations'
import Swal from 'sweetalert2'
import { useEffect } from 'react'



const service = new CrudServices()

export const Form = () => {
  
  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

 
  const [formData, setFormData] = useState({

    Applicants : 
    {    
      ApplicantName : '', 
      ApplicantAddress : '',
      ApplicantDOB : '', 
      ApplicantAge : '',  
      ApplicantGender : '', 
      ApplicantCivilStatus : '', 
      ApplicantEmail : '',
      ApplicantContactNumber : '',
      ApplicantEmployer : '', 
      ApplicantOccupation : '',
    },
    
    Applications : {
      ApplicationType: '',
      NumberOfUnits: '',
      ApplicantID: '',
    },

    Beneficiaries : { 
      BeneficiaryName: '',
      BRelationship: '', 
      BAge: '',
    },
  })

 

  const handleChange = (field, event) => {
    const { value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      Applicants: {
        ...prevState.Applicants,
        [field]: value
      },

      Applications: {
        ...prevState.Applications,
        [field]: value
      },

      Beneficiaries: {
        ...prevState.Beneficiaries,
        [field]: value
      },
      

    }));
  };

  //TODO show modal before submitting form
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    service.CreateInformation(data) // Send data to create record
      .then(response => {
        Toast.fire({
          icon: "success",  
          title: "Form successfully submitted",
        });
        methods.reset();
        setSuccess(true);
      })
      .catch(error => {
        console.error("Error creating record:", error);
        Toast.fire({
          icon: "error",  
          title: "Check network status.",
        });
        
      });
  });


 
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Select {...validators.applicationType_validation} 
            value = {formData.Applications.ApplicationType} 
            onChange={handleChange} 
            className="width-1/4"
          /> 

          <Select {...validators.numOfUnits_validation} 
            value = {formData.Applications.NumberOfUnits} 
            onChange={handleChange}
            className="width-1/4"
          />

        </div>
        <br />

        <div className="grid gap-5 md:grid-cols-1">

          <Input {...validators.name_validation} 
            value = {formData.Applicants.ApplicantName} 
            onChange={handleChange} 
            className="width-1/4"
          />
        </div>

        <br />

        <div className="grid gap-5 md:grid-cols-2">
          <Input {...validators.address_validation} 
            value = {formData.Applicants.ApplicantAddress} 
            onChange={handleChange} 
          />
          
        <div className="flex gap-4">
          <Input {...validators.dob_validation} 
            value = {formData.Applicants.ApplicantDOB}
            onChange={handleChange}
          />
          {/* //TODO: add age validation here  */}
          {/* if age < 13 || age > 65 */}
          {/* Toast.Fire Age is not allowed for individual */}
          {/* Dynamically change the age based on the selected birthdate */}

          <Input {...validators.age_validation} 
            value={formData.Applicants.ApplicantAge} 
            onChange={handleChange} 
          />
          
        </div>

          <Select {...validators.gender_validation} 
            value = {formData.Applicants.ApplicantGender} 
            onChange={handleChange} 
          />

          <Select {...validators.civilStatus_validation} 
            value = {formData.Applicants.ApplicantCivilStatus} 
            onChange={handleChange} 
          />

          <Input {...validators.email_validation} 
            value = {formData.Applicants.ApplicantEmail} 
            onChange={handleChange} 
          />
          <Input {...validators.num_validation} 
            value = {formData.Applicants.ApplicantContactNumber} 
            onChange={handleChange} 
          />
          <Input {...validators.empInfo_validation} 
            value = {formData.Applicants.ApplicantEmployer} 
            onChange={handleChange} 
          />
          <Input {...validators.occupation_validation} 
            value = {formData.Applicants.ApplicantOccupation} 
            onChange={handleChange} 
          />

          </div>
          
          <br />
          <hr className="col-span-2" />
          <br />
          
          

      

        <div className="grid gap-5 md:grid-cols-3">
          {/* Beneficiary 1 */}
          <Input {...validators.firstBeneficiary_validation} 
          value = {formData.Beneficiaries.BeneficiaryName} 
          onChange={handleChange}
          className="width-1/4"
          />

          <Input {...validators.fbnefRel_validation} 
          value = {formData.Beneficiaries.BRelationship} 
          onChange={handleChange}
          className="width-1/4"
          />

          <Input {...validators.fbnefAge_validation} 
          value = {formData.Beneficiaries.BAge} 
          onChange={handleChange}
          className="width-1/4"
          />

          {/* Beneficiary 2 */}
          <Input {...validators.scndBeneficiary_validation} 
          value = {formData.Beneficiaries.BeneficiaryName} 
          onChange={handleChange}
          className="width-1/4"
          />

          <Input {...validators.scndbnefRel_validation} 
          value = {formData.Beneficiaries.BRelationship} 
          onChange={handleChange}
          className="width-1/4"
          />
          
          <Input {...validators.scndbnefAge_validation} 
          value = {formData.Beneficiaries.BAge} 
          onChange={handleChange}
          
          className="width-1/4"
          />

          {/* Beneficiary 3 */}
          <Input {...validators.thirdBeneficiary_validation} 
          value = {formData.Beneficiaries.BeneficiaryName} 
          onChange={handleChange}
          className="width-1/4"
          />

          <Input {...validators.trdbnefRel_validation} 
          value = {formData.Beneficiaries.BRelationship} 
          onChange={handleChange}
          className="width-1/4"
          />
          
          <Input {...validators.trdbnefAge_validation} 
          value = {formData.Beneficiaries.BAge} 
          onChange={handleChange}
          className="width-1/4"
          />
        </div>

        <br />
        <hr className="col-span-2" />  
        <br />
          <center><h1 className="font-regular capitalize">Additional Information to be filled-out by</h1></center>
          <center><h1 className="font-semibold capitalize">ASB Family Applicants Only</h1></center>
        <br />

        <span className="font-regular capitalize">Insured dependents of</span> <span className='font-semibold capitalize'>Married principal</span> <span className="font-regular capitalize">Insured, if applicable</span>
        <br />
        <br />

        <div className="grid gap-5 md:grid-cols-2">
          <Input {...validators.spouse_validation}
            value = {formData.fstSpouse}
            onchange = {handleChange}
          />

          <Input {...validators.spouseDob_validation}
            value = {formData.spouseDob}
            onChange={handleChange}
            className="width-1/4"
          />

          <Input {...validators.fstdependent_validation}
            value = {formData.fstdependent}
            onchange = {handleChange}
          />

          <Input {...validators.fstdependentDob_validation} 
            value = {formData.fstdependentDob} 
            onChange={handleChange} 
            className="width-1/4"
          />

          <Input {...validators.snddependent_validation}
            value = {formData.snddependent}
            onchange = {handleChange}
          />

          <Input {...validators.snddependentDob_validation} 
            value = {formData.snddependentDob} 
            onChange={handleChange} 
            className="width-1/4"
          />
          
          <Input {...validators.trdDependent_validation}
            value = {formData.trdDependent}
            onchange = {handleChange}
          />

          <Input {...validators.trdDependentDob_validation} 
            value = {formData.trdDependentDob} 
            onChange={handleChange} 
            className="width-1/4"
          />

        </div>


        {/* <br />

        <hr className="col-span-2" />  
        <br />
        <h1 className="font-semibold capitalize">Insured dependents of Single principal Insured, if applicable</h1>
        <br />

        <div className="flex gap-4">
          <Input {...validators.fstParent_validation}
            value = {formData.fstParent}
            onchange = {handleChange}
          />

          <Input {...validators.fstParentDob_validation} 
            value = {formData.fstParentDob} 
            onChange={handleChange} 
            className="width-1/4"
          />
        </div>

        <br />

        <div className="flex gap-4">
          <Input {...validators.sndParent_validation}
            value = {formData.sndParent}
            onchange = {handleChange}
          />

          <Input {...validators.sndParentDob_validation} 
            value = {formData.sndParentDob} 
            onChange={handleChange} 
            className="width-1/4"
          />
        </div> */}
        
        <div className="mt-5">
          {success && (
            <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}

          <button
            onClick={onSubmit}
            className="p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
          >
            
            <GrMail />
            Submit Form
          </button>

        </div>
      </form>
    </FormProvider>
  )
}




















          {/* {applicationType === "Family"?<FamilyForms />:""} */}


                    
          {/* <Select>
            <select value={applicationType} onChange={(e)=>handleChanges(e)}>
              <option>Individual</option>
              <option>Family</option>
              <option>Senior</option>
            </select>
          </Select> */}