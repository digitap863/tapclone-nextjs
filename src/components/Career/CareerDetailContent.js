import React from 'react'
import StarPortal from '../Shared/StarBlinkingPortal'
import { IoArrowBackSharp } from 'react-icons/io5'
import Link from 'next/link'

const CareerDetailContent = ({ job }) => {
  if (!job) {
    return (
      <StarPortal>
        <div className="container mx-auto p-8 md:p-20 min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-2xl text-white font-bold mb-4">Job Not Found</h1>
          <p className="text-gray-400 mb-8">Sorry, the job you are looking for does not exist or has been removed.</p>
          <Link href='/careers'>
            <div className='text-white rounded-full border border-white text-2xl p-3 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer w-fit'><IoArrowBackSharp /></div>
          </Link>
        </div>
      </StarPortal>
    );
  }

  return (
    <StarPortal>
      <div className="container mx-auto p-8 md:p-20 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Link href='/careers'>
            <div className='text-white rounded-full border border-white text-2xl p-3 mb-10 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer w-fit'><IoArrowBackSharp /></div>
          </Link>
          {/* Job Title */}
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 capitalize">{job.position}</h1>

          {/* Job Description */}
          <div className="text-[#F0ECEC] text-base md:text-lg mb-6 space-y-2" dangerouslySetInnerHTML={{ __html: job.description }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-w text-xl font-semibold mb-2">Experience:</h2>
              <p className="text-[#F0ECEC]">{job.experience}</p>
            </div>
            <div>
              <h2 className="text-w text-xl font-semibold mb-2">Location:</h2>
              <p className="text-[#F0ECEC]">{job.location}</p>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-w text-xl font-semibold mb-2">Skills:</h2>
              <p className="text-[#F0ECEC]">{Array.isArray(job.skills) ? job.skills.join(', ') : job.skills}</p>
            </div>
          </div>

          {/* Application Form */}
          <div className="rounded-xl p-6 md:p-10 shadow-md border border-[#e5e5e5]">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">First name *</label>
                  <input type="text" className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 bg-black" placeholder="First name *" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Last name *</label>
                  <input type="text" className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 bg-black" placeholder="Last name *" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Email id *</label>
                  <input type="email" className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 bg-black" placeholder="Email id *" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Select Location *</label>
                  <input type="text" className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 bg-black" placeholder="Select Location" defaultValue={job.location} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Select Position *</label>
                  <input type="text" className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 bg-black" placeholder="Select Position" defaultValue={job.position} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Experience *</label>
                  <input type="text" className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 bg-black" placeholder="Experience" defaultValue={job.experience} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Current Salary *</label>
                  <input type="text" className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 bg-black" placeholder="Current Salary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Qualification</label>
                  <input type="text" className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 bg-black" placeholder="Qualification" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Gender *</label>
                  <div className="flex gap-3 mt-2">
                    <label className="inline-flex items-center">
                      <input type="radio" name="gender" className="form-radio" />
                      <span className="ml-2 text-[#F0ECEC]">Male</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="gender" className="form-radio" />
                      <span className="ml-2 text-[#F0ECEC]">Female</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="gender" className="form-radio" />
                      <span className="ml-2 text-[#F0ECEC]">Others</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Upload Resume *</label>
                  <div className="flex items-center gap-2">
                    <input type="file" className="block w-full text-sm text-[#F0ECEC] border border-[#e5e5e5] rounded-md cursor-pointer bg-black" />
                    <span className="text-xs text-[#888]">No File Chosen</span>
                  </div>
                </div>
                <div className="md:col-span-1 flex justify-end">
                  <button type="submit" className="bg-w text-white px-8 py-2 rounded-md font-semibold mt-4 md:mt-0 w-full md:w-auto border border-[#F0ECEC]">Apply Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StarPortal>
  )
}

export default CareerDetailContent
