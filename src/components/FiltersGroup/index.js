import ProfileDetails from '../ProfileDetails'

import './index.css'

const FiltersGroup = props => {
  const {profileDetails, profileApiStatus} = props

  const renderEmploymentTypesList = () => {
    const {employmentTypesList, updateEmploymentTypesChecked} = props
    return employmentTypesList.map(eachType => {
      const updateTypeslist = () => {
        updateEmploymentTypesChecked(eachType.employmentTypeId)
      }
      return (
        <li className='fliters-list-item' key={eachType.employmentTypeId}>
          <input
            type='checkbox'
            className='checkbox-input'
            id={eachType.employmentTypeId}
            value={eachType.employmentTypeId}
            onChange={updateTypeslist}
          />
          <label htmlFor={eachType.employmentTypeId} className='filter-label'>
            {eachType.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentTypes = () => (
    <>
      <h1 className='filter-heading'>Type of Employment</h1>
      <ul className='filters-list'>{renderEmploymentTypesList()}</ul>
    </>
  )

  const renderSalaryRangesList = () => {
    const {salaryRangesList, activeSalaryRangeId, updateSalaryRangeId} = props

    return salaryRangesList.map(eachRange => {
      const onChangeRange = () => updateSalaryRangeId(eachRange.salaryRangeId)
      const isChecked = eachRange.salaryRangeId === activeSalaryRangeId

      return (
        <li className='fliters-list-item' key={eachRange.salaryRangeId}>
          <input
            type='radio'
            className='checkbox-input'
            id={eachRange.salaryRangeId}
            name='salary ranges'
            onChange={onChangeRange}
            checked={isChecked}
          />
          <label htmlFor={eachRange.salaryRangeId} className='filter-label'>
            {eachRange.label}
          </label>
        </li>
      )
    })
  }

  const renderSalaryRangesTypes = () => (
    <>
      <h1 className='filter-heading'>Salary Range</h1>
      <ul className='filters-list'>{renderSalaryRangesList()}</ul>
    </>
  )

  return (
    <div className='side-bar-container'>
      <ProfileDetails
        profileApiStatus={profileApiStatus}
        profileDetails={profileDetails}
      />
      <hr className='seprator' />
      <div className='Filters-group-container'>{renderEmploymentTypes()}</div>
      <hr className='seprator' />
      <div className='Filters-group-container'>{renderSalaryRangesTypes()}</div>
    </div>
  )
}

export default FiltersGroup
