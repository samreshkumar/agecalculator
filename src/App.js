import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  // const myDate = new Date()
  // const myCurrentDate = myDate.getDate()
  // const myCurrentMonth = myDate.getMonth()
  // const myCurrentYear = myDate.getFullYear()
  // const myMaxDate  = `${myCurrentYear}-${myCurrentMonth}-${myCurrentDate}`

  const [dateofbirth, Setdateofbirth] = useState('')
  const [currentdate, Setcurrentdate] = useState('')
  const [resultDatediff, SetresultDatediff] = useState('')
  const [resultMonthDiff, SetresultMonthDiff] = useState('')
  const [resultYearDiff, SetresultYearDiff] = useState('')
  const [errormessage, Seterrormessage] = useState('')
  // const [maxdate, SetMaxdate] = useState(myMaxDate)


  const formSubmit = (event) => {
    event.preventDefault()
    if (currentdate > dateofbirth) {
      const date2 = new Date(currentdate);
      const date1 = new Date(dateofbirth);
      const Difference_In_Time = date2.getTime() - date1.getTime();
      const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

      //const Difference_In_year = Math.floor(Difference_In_Days / 365);
      const Difference_In_months = (date2.getMonth() - date1.getMonth());
      const Difference_In_day = (date2.getDate() - date1.getDate());
      const Difference_In_yearn = (date2.getFullYear() - date1.getFullYear());
      if (Difference_In_months < -1) {
        const Difference_In_yearnn = (date2.getFullYear() - date1.getFullYear()) - 1;
        const Difference_In_monthsn = 12 + (date2.getMonth() - date1.getMonth());
        if(Difference_In_day < -1){
          alert()
          const Difference_In_monthsn2 = Difference_In_monthsn - 1
          const Difference_In_dayn =  Difference_In_day + 30
          SetresultMonthDiff(Difference_In_monthsn2)
          SetresultDatediff(Difference_In_dayn)
          SetresultYearDiff(Difference_In_yearnn)
        }else{
          SetresultMonthDiff(Difference_In_monthsn)
          SetresultYearDiff(Difference_In_yearnn)
        }
      
      } else {
        SetresultMonthDiff(Difference_In_months)
        SetresultYearDiff(Difference_In_yearn)
        SetresultDatediff(Difference_In_day)
      }
  
      console.log(Difference_In_Days, Difference_In_yearn, Difference_In_months, Difference_In_day)
   

    } else {
      Seterrormessage('Enter correct input')
    }
  }

  return (
    <>
      <div className='section1'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='main-heading'><h1>AGE calculator</h1></div>
              <div className='dbform'>

                <form onSubmit={formSubmit}>
                  <div className='dbfomrinner'>
                    <div className='dbfomrinner-main'>
                      <div className='f-form'>
                        <input type="date" name="dateofbirth" onChange={(e) => Setdateofbirth(e.target.value)} value={dateofbirth} required />
                      </div>
                      <div className='f-form'>
                        <input type="date" name="currentdate" onChange={(e) => Setcurrentdate(e.target.value)} value={currentdate} required />
                      </div>
                      <div className='submit-btn'>
                        <button className='btn btn-success'>Submit</button>
                      </div>
                    </div>
                  </div>
                </form>

                <div className='result'>
                  {errormessage}
                  {resultYearDiff !== '' || currentdate > dateofbirth ? `Age:-  ${resultYearDiff} Years, ${resultMonthDiff} Months, ${resultDatediff} Days`
                    : ''}

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
