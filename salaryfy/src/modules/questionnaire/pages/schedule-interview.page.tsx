import { ChangeEvent, useState } from "react";
import BottomPageNavigationBar from "../components/bottom-navigation-bar.component";
import UserJobDetails from "../components/job-details.component";
import QuestionnaireTopBarStep from "../components/questionnaire-topbar-step.component";
import SubSteps from "../components/sub-steps.component";
import DropdownMenu from "../../../components/DropdownMenu";
import { Button, Checkbox } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CancelIcon from '@mui/icons-material/Cancel';

export default function ScheduleInterviewPage() {

  return (
    <div className='w-100 flex flex-col items-center h-[100%]'>
      <QuestionnaireTopBarStep />
      <div className='max-w-[120em] w-[100%] mb-[2em] flex flex-col h-[100%]'>
        <div className='text-[1.4em]'>Job Details</div>
        <UserJobDetails />
        {/* STEPS */}
        <div className='py-[2em] px-[3em] h-[100%]'>

          <SubSteps />
          {/* <PersonalDetails/> */}
          {/* <ScreeningQuestions /> */}
          <ScheduleInterview />
          {/* <FresherDashboard /> */}
          {/* <FresherProfileUpload /> */}

          <BottomPageNavigationBar />
        </div>
      </div>
    </div>
  );
}

export function ScheduleInterview() {

  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className='h-[100%]'>
      <div className='font-semibold text-[1.8em] text-[#000] mb-[1em]'>You can select multiple locations with date and time</div>

      <div className='bg-[#0E5F5910] p-[1.5em] rounded-[1.5em] flex mb-[2em]'>
        <div className='flex flex-col mr-[2em]'>
          <div className='text-[1.6em] text-[#5B5B5B] mb-[1em]'>Please confirm your location for interview</div>
          <DropdownMenu className='flex-grow' label='Select Location' endIcon={<KeyboardArrowDownIcon />} />
        </div>
        <div className='flex flex-col flex-grow'>
          <div className='text-[1.6em] text-[#5B5B5B] mb-[1em]'>Please confirm your location for interview</div>
          <div className='flex'>
            <DropdownMenu className='flex-grow mr-[1em]' label='Select Date' endIcon={<KeyboardArrowDownIcon />} />
            <DropdownMenu className='flex-grow max-w-[8em]' label='10' endIcon={<KeyboardArrowDownIcon />} />
            <div className='mx-[1em] text-[1.5em] flex items-center'>:</div>
            <DropdownMenu className='flex-grow max-w-[8em] mr-[1em]' label='30' endIcon={<KeyboardArrowDownIcon />} />
            <DropdownMenu className='flex-grow max-w-[8em] mr-[1em]' label='AM' endIcon={<KeyboardArrowDownIcon />} />
            <Button sx={{ backgroundColor: '#FECD08', color: '#0E5F59' }} variant='contained'><span className='font-bold'>Add</span></Button>
          </div>
        </div>
      </div>

      <div className='h-[100%] mb-[2em]'>

        <div className='flex font-semibold p-[0.5em] bg-[#E2F3F4] text-[#0E5F59] rounded-md text-[1.5em] w-[fit-content] mb-[1.5em]'>
          <div>Slot-1</div>
          <div className='mx-[1em] flex-grow w-[1px] bg-[#0E5F594E]'></div>
          <div className='mr-[0.5em]'>Deverabisanahalli, On Tueday, 06 June 2023, 4:00 PM</div>
          <div><CancelIcon sx={{ color: 'red' }} /></div>
        </div>

        <div className='flex font-semibold p-[0.5em] bg-[#E2F3F4] text-[#0E5F59] rounded-md text-[1.5em] w-[fit-content] mb-[1.5em]'>
          <div>Slot-2</div>
          <div className='mx-[1em] flex-grow w-[1px] bg-[#0E5F594E]'></div>
          <div className='mr-[0.5em]'>Kalubisanahalli, On Thursday, 08 June 2023, 10:00 PM</div>
          <div><CancelIcon sx={{ color: 'red' }} /></div>
        </div>

        <div className='flex font-semibold p-[0.5em] bg-[#E2F3F4] text-[#0E5F59] rounded-md text-[1.5em] w-[fit-content] mb-[1.5em]'>
          <div>Slot-3</div>
          <div className='mx-[1em] flex-grow w-[1px] bg-[#0E5F594E]'></div>
          <div className='mr-[0.5em]'>Koremanagalam, On Satureday, 10 June 2023, 11:30 PM</div>
          <div><CancelIcon sx={{ color: 'red' }} /></div>
        </div>

        <div className='flex items-center text-[1.6em] text-[#5B5B5B]'>
          <div><Checkbox checked={checked} onChange={handleChange} /></div>
          <div>I want to get the job description on my </div>
          <div className='mx-[0.5em]'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_205_11107)">
              <path d="M9.00225 0H8.99775C4.03538 0 0 4.0365 0 9C0 10.9688 0.6345 12.7935 1.71337 14.2751L0.59175 17.6186L4.05113 16.5128C5.47425 17.4555 7.17188 18 9.00225 18C13.9646 18 18 13.9624 18 9C18 4.03763 13.9646 0 9.00225 0Z" fill="#4CAF50" />
              <path d="M14.2416 12.708C14.0244 13.3211 13.1627 13.8296 12.4753 13.9781C12.0051 14.0782 11.3908 14.1581 9.32306 13.3009C6.67819 12.2051 4.97494 9.51748 4.84219 9.34311C4.71506 9.16873 3.77344 7.91998 3.77344 6.62848C3.77344 5.33698 4.42931 4.70811 4.69369 4.43811C4.91081 4.21648 5.26969 4.11523 5.61394 4.11523C5.72531 4.11523 5.82544 4.12086 5.91544 4.12536C6.17981 4.13661 6.31256 4.15236 6.48694 4.56973C6.70406 5.09286 7.23281 6.38436 7.29581 6.51711C7.35994 6.64986 7.42406 6.82986 7.33406 7.00423C7.24969 7.18423 7.17544 7.26411 7.04269 7.41711C6.90994 7.57011 6.78394 7.68711 6.65119 7.85136C6.52969 7.99423 6.39244 8.14723 6.54544 8.41161C6.69844 8.67036 7.22719 9.53323 8.00569 10.2262C9.01031 11.1206 9.82481 11.4064 10.1162 11.5279C10.3333 11.6179 10.5921 11.5965 10.7507 11.4277C10.9521 11.2106 11.2007 10.8506 11.4538 10.4962C11.6338 10.242 11.8611 10.2105 12.0996 10.3005C12.3426 10.3849 13.6284 11.0205 13.8928 11.1521C14.1572 11.2849 14.3316 11.3479 14.3957 11.4592C14.4587 11.5706 14.4587 12.0937 14.2416 12.708Z" fill="#FAFAFA" />
            </g>
            <defs>
              <clipPath id="clip0_205_11107">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          </div>
          <div>whatsapp number</div>
        </div>
      </div>

    </div>
  )
}