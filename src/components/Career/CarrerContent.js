"use client";
import StarPortal from "../Shared/StarBlinkingPortal";
import astro from "../../assets/home/astro.png";
import Image from "next/image";
import Link from "next/link";
import Knowmore from "../Shared/Knowmore";
import React, { useEffect, useState } from "react";

const EmptyJobs = () => (
  <div className="flex flex-col items-center justify-center py-16">
    <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400 mb-4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 7.5V6A2.25 2.25 0 0 0 14.25 3.75h-4.5A2.25 2.25 0 0 0 7.5 6v1.5M3.75 9.75h16.5m-1.5 0v7.5A2.25 2.25 0 0 1 16.5 19.5h-9a2.25 2.25 0 0 1-2.25-2.25v-7.5m13.5 0V6A3.75 3.75 0 0 0 16.5 2.25h-9A3.75 3.75 0 0 0 3.75 6v3.75" />
    </svg>
    <h3 className="text-lg font-semibold text-white mb-2">No jobs available</h3>
    <p className="text-gray-400 text-center max-w-xs">We don&apos;t have any open positions right now. Please check back later!</p>
  </div>
);

const CarrerContent = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/admin/career");
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        setError(err.message || "Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <StarPortal>
      <div>
        <div className="w-full container mx-auto relative px-4 sm:px-8 md:px-12 lg:px-20 py-20">
          <div className="flex flex-col items-center justify-center min-h-[40vh] relative">
            <Image src={astro} alt="astro" className="absolute top-10 right-4 sm:top-16 sm:right-8 md:top-20 md:right-20 w-16 h-16 sm:w-20 sm:h-20 md:w-auto md:h-auto" />
            <h2 className="text-[#D8FC00]  text-6xl md:text-8xl lg:text-9xl font-poppins font-extrabold leading-[1.1] animate-[textStroke_0.5s_ease-out_2.5s_forwards] inline-block mb-4 sm:mb-6 md:mb-8 text-center">
              Career
            </h2>
            <p className="text-white text-sm sm:text-lg md:text-xl font-poppins font-thin max-w-2xl text-center px-4">
              Careers refer to the various paths individuals choose to pursue in
              their professional lives, typically encompassing a series of related
              jobs and roles over time.
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6 md:space-y-8 py-6 sm:py-8 md:py-10">
            {loading && (
              <div className="text-white text-center">Loading jobs...</div>
            )}
            {error && (
              <div className="text-red-400 text-center">{error}</div>
            )}
            {!loading && !error && jobs.length === 0 && <EmptyJobs />}
            {!loading && !error && jobs.map((job) => (
              <div
                key={job._id}
                className="bg-[#000000] rounded-lg px-3 sm:px-4 py-4 sm:py-6 md:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-md border border-[#FFFFFF] gap-3 sm:gap-4"
              >
                <div className="flex-1 w-full sm:min-w-[160px]">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium font-poppins text-white">{job.position}</h3>
                </div>
                <div className="flex-1 w-full sm:min-w-[140px]">
                  <span className="block font-semibold text-white text-sm sm:text-base">Experience</span>
                  <span className="block text-xs sm:text-sm text-white">{job.experience}</span>
                </div>
                <div className="flex-[2] w-full sm:min-w-[200px]">
                  <span className="block font-semibold text-white text-sm sm:text-base">Skills</span>
                  <span className="block text-xs sm:text-sm text-white break-words">{Array.isArray(job.skills) ? job.skills.join(", ") : job.skills}</span>
                </div>
                <div className="flex-1 w-full sm:min-w-[70px]">
                  <span className="block font-semibold text-white text-sm sm:text-base">Location</span>
                  <span className="block text-xs sm:text-sm text-white">{job.location}</span>
                </div>
                <div className="flex-1 flex justify-center sm:justify-end items-center w-full sm:min-w-[120px] mt-4 sm:mt-0">
                  <Link href={`/careers/${job._id}`} className="border px-4 sm:px-6 md:px-8 py-2 rounded-full relative overflow-hidden group z-10 whitespace-nowrap text-sm sm:text-base">
                    <span className="absolute left-0 top-0 w-0 h-full bg-white transition-all duration-500 group-hover:w-full -z-10"></span>
                    <span className="relative group-hover:text-black transition-colors duration-500">
                      MORE INFO
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Knowmore />
      </div>
    </StarPortal>
  );
};

export default CarrerContent;
