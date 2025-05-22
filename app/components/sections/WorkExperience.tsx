import React, { useState } from "react";
import { cn } from "~/lib/utils";

// Actual work experience data
const workExperience = [
  {
    id: 1,
    company: "Amazon Web Services",
    title: "SDE I",
    period: "Aug 2020 – Feb 2024",
    location: "Seattle, WA",
    responsibilities: [
      "Led our team's region-expansion efforts for classified data centers, involving contracts worth billions of dollars",
      "Developed within an 8+ microservice architecture using Apache Spark, AWS Lambda, DynamoDB, S3, and other services to aggregate petabytes of AWS billing data",
      "Optimized system inefficiencies resulting in over $45k/month infrastructure cost reduction",
      "Mentored interns and new-hires, and authored technical documents that led to multiple high-value deliverables"
    ]
  },
  {
    id: 2,
    company: "Maxentric Technologies",
    title: "Software Engineer (Part-time)",
    period: "Jan 2019 – June 2020",
    location: "San Diego, CA",
    responsibilities: [
      "Refactored UDP-based delay-tolerant network protocol in Java, achieving 34% code reduction and 29% protocol efficiency increase",
      "Developed metrics collection system using Python and SQLite, with automated visualization via Plotly",
      "Created proof-of-concept Android app in Kotlin to test and demo UDP network protocol",
      "Played a vital role in technology demos that secured Phase I-extension funding from DoD's SBIR program"
    ]
  },
  {
    id: 3,
    company: "Amazon Web Services",
    title: "SDE Intern",
    period: "Sept 2018 – Dec 2018",
    location: "Seattle, WA",
    responsibilities: [
      "Designed and implemented Tag API functionality in Java for an internal AWS versioned database service",
      "Leveraged DynamoDB as a NoSQL backend, optimizing partition key architecture to avoid hot partitions",
      "Delivered feature on schedule while working independently within a larger team environment"
    ]
  },
  {
    id: 4,
    company: "Intel",
    title: "Software Engineering Intern",
    period: "June 2018 – Sept 2018",
    location: "Portland, OR",
    responsibilities: [
      "Created real-time network analytics solutions using Apache Kafka & Java for detecting large flows and routing loops",
      "Built visualization dashboards using Grafana with InfluxDB timestream database backend",
      "Integrated Cloudflare's GoFlow to produce sFlow network metrics as a data source for Apache Kafka"
    ]
  },
  {
    id: 5,
    company: "Maxentric Technologies",
    title: "Software Engineer (Part-time)",
    period: "Jan 2017 – June 2018",
    location: "San Diego, CA",
    responsibilities: [
      "Developed web application using HTML/CSS/JavaScript/Bootstrap to visualize network topologies with Vis.js",
      "Automated cloud host provisioning with multi-threaded Python scripts for network simulation scenarios",
      "Gained hands-on experience with TCP/IP networking, including packet analysis, network routing, and virtual interfaces"
    ]
  }
];

export default function WorkExperience() {
  const [activeTab, setActiveTab] = useState(1);

  const activeJob = workExperience.find(job => job.id === activeTab) || workExperience[0];

  return (
    <section className="p-5 text-gray-300 rounded-md shadow-sm h-[calc(30vh)] sm:h-[calc(33vh)] md:h-[calc(36vh)] lg:h-[calc(40vh)] overflow-hidden">
      <h2 className="text-lg font-semibold mb-3 text-white">
        <span className="text-[#64ffda] font-mono text-base mr-2">01.</span>
        Where I've Worked
      </h2>
      
      <div className="flex flex-col sm:flex-row gap-3 h-[calc(100%-2.5rem)] overflow-hidden">
        {/* Tabs - vertical on desktop, horizontal on mobile */}
        <div className="flex md:flex-col border-b md:border-b-0 overflow-x-auto md:overflow-x-visible md:min-w-[150px]">
            {/* <div className="md:border-l border-gray-700"> */}
          {workExperience.map((job) => (
            <button
                type="button"
              key={job.id}
              onClick={() => setActiveTab(job.id)}
              className={cn(
                "px-3 py-2 text-sm font-medium whitespace-nowrap text-left transition-all relative",
                activeTab === job.id
                  ? "text-[#64ffda]"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/30"
              )}
            >
              <span className={cn(
                "absolute sm:left-0 sm:h-full h-[2px] sm:w-[2px] w-full bottom-0 sm:bottom-auto",
                activeTab === job.id
                  ? "bg-[#64ffda]"
                  : "bg-transparent"
              )} />
              {job.company}
            </button>
          ))}
          {/* </div> */}
        </div>

        {/* Content */}
        <div className="py-1 flex-1 overflow-y-auto">
          <h3 className="text-base font-semibold text-white mb-1">
            {activeJob.title} <span className="text-[#64ffda]">@ {activeJob.company}</span>
          </h3>
          <p className="text-gray-400 text-xs mb-1">{activeJob.period}</p>
          <p className="text-gray-400 text-xs mb-2">{activeJob.location}</p>
          
          <ul className="space-y-2">
            {activeJob.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex text-sm">
                <span className="text-[#64ffda] mr-2 flex-shrink-0">▹</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}