import React from "react";

const Dates = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white w-fit px-10 py-5 space-y-5">
        <div className="space-y-3 "> 
          <h3 className="text-2xl text-[#d83616]">Registration</h3>
          <table >
            <tr >
              <td className='w-1/2 break-word'>
                <span>Registration portal opens</span>
              </td>
              <td className="pl-5">
                <span>July 14, 2022</span>
              </td>
            </tr>
            <tr>
              <td className='w-1/2 break-word'>Author registration deadline</td>
              <td className="pl-5">August 12, 2022</td>
            </tr>
            <tr>
              <td className='w-1/2 break-word'>Early Bird registration deadline</td>
              <td className="pl-5">August 31, 2022</td>
            </tr>
            <tr>
              <td className='w-1/2 break-word'>
                Online registration portal closes for in-person attendance
              </td>
              <td className="pl-5">November 25, 2022</td>
            </tr>
            <tr>
              <td className='w-1/2 break-word'>Registration deadline for virtual attendance</td>
              <td className="pl-5">December 5, 2022</td>
            </tr>
            <tr>
              <td className='w-1/2 break-word'>Registration at the venue (for in-person attendance)</td>
              <td className="pl-5">December 04-08, 2022</td>
            </tr>
          </table>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl text-[#d83616]">Grants</h3>
          <table>
            <tr>
              <td className='w-1/2 break-word'>Grant applications for registration waivers open</td>
              <td className="pl-5">July 14, 2022</td>
            </tr>
            <tr>
              <td>Application deadline for Author grants</td>
              <td className="pl-5">July 25, 2022</td>
            </tr>
            <tr>
              <td>Author grant notifications</td>
              <td className="pl-5">Aug 3, 2022</td>
            </tr>
            <tr>
              <td className=''>
                Application deadline for Music Author grants and WiMIR grants
              </td>
              <td className="pl-5">Aug 19, 2022</td>
            </tr>
            <tr>
              <td>
                Grant notifications for Music Author grants and WiMIR grants
              </td>
              <td className="pl-5">Aug 19, 2022</td>
            </tr>
          </table>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl text-[#d83616]">Papers</h3>
          <table>
            <tr>
              <td className='w-1/2 break-word'>
                <span>Submission site opening</span>
              </td>
              <td className="pl-5">
                <span>April 22, 2022</span>
              </td>
            </tr>
            <tr>
              <td>Abstract submission deadline</td>
              <td className="pl-5">May 13, 2022</td>
            </tr>
            <tr>
              <td>Full paper submission deadline</td>
              <td className="pl-5">May 20, 2022</td>
            </tr>
            <tr>
              <td>Notification of acceptance</td>
              <td className="pl-5">July 14, 2022</td>
            </tr>
            <tr>
              <td>Camera ready deadline</td>
              <td className="pl-5">August 31, 2022</td>
            </tr>
          </table>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl text-[#d83616]">Music Program</h3>
          <table>
            <tr>
              <td className='w-1/2 break-word'>
                <span>First Call for Music</span>
              </td>
              <td className="pl-5">
                <span>July 4, 2022</span>
              </td>
            </tr>
            <tr>
              <td>Submission site opening</td>
              <td className="pl-5">July 10, 2022</td>
            </tr>
            <tr>
              <td>Music submission deadline</td>
              <td className="pl-5">July 31, 2022</td>
            </tr>
            <tr>
              <td>Notification of acceptance</td>
              <td className="pl-5">Aug 15, 2022</td>
            </tr>
            <tr>
              <td>Performance-ready submission deadline</td>
              <td className="pl-5">Oct 31, 2022</td>
            </tr>
          </table>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl text-[#d83616]">Tutorials</h3>
          <table>
            <tr>
              <td className='w-1/2 break-word'>
                <span>Proposal Submission</span>
              </td>
              <td className="pl-5">
                <span>April 17, 2022</span>
              </td>
            </tr>
            <tr>
              <td>Revision</td>
              <td className="pl-5">April 24, 2022</td>
            </tr>
            <tr>
              <td>Notification of Acceptance</td>
              <td className="pl-5">June 5, 2022</td>
            </tr>
          </table>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl text-[#d83616]">Late-Breaking Demo</h3>
          <table>
            <tr>
              <td className='w-1/2 break-word'>
                <span>LBD Submission Deadline</span>
              </td>
              <td className="pl-5">
                <span>TBD</span>
              </td>
            </tr>
          </table>
          <div>
            <h3 className="text-2xl text-[#d83616]">New-to-ISMIR Mentoring Program</h3>
            <table>
              <tr>
                <td>Deadline for applying to mentorship program</td>
                <td className="pl-5">February 28, 2022</td>
              </tr>
              <tr>
                <td>Deadline for mentees for paper submission</td>
                <td className="pl-5">March 25, 2022</td>
              </tr>
              <tr>
                <td>Notification for Mentor-Mentee match</td>
                <td className="pl-5">March 28, 2022</td>
              </tr>
              <tr>
                <td>Feedback from mentors</td>
                <td className="pl-5">April 15, 2022</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dates;
