
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Briefcase, ArrowLeft, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';

const JobDetail = () => {
  const { id } = useParams();

  // Mock data - replace with real data later
  const mockJob = {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $160k',
    description: 'We are looking for a Senior Frontend Developer to join our dynamic team. You will be responsible for building user-facing features using React and TypeScript.',
    postedTime: '2 days ago',
    logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=center',
    fullDescription: `We are seeking an experienced Senior Frontend Developer to join our growing engineering team. In this role, you will be responsible for developing and maintaining high-quality web applications using modern JavaScript frameworks.

Key Responsibilities:
• Develop responsive web applications using React, TypeScript, and modern CSS
• Collaborate with designers and backend developers to implement user interfaces
• Write clean, maintainable, and well-documented code
• Participate in code reviews and provide constructive feedback
• Optimize applications for maximum speed and scalability
• Stay up-to-date with emerging technologies and industry best practices

Requirements:
• 5+ years of experience in frontend development
• Strong proficiency in React, TypeScript, and modern JavaScript (ES6+)
• Experience with state management libraries (Redux, Zustand, etc.)
• Knowledge of CSS preprocessors and modern CSS frameworks
• Familiarity with build tools (Webpack, Vite, etc.)
• Experience with version control systems (Git)
• Strong problem-solving skills and attention to detail
• Excellent communication and teamwork abilities

Nice to Have:
• Experience with Next.js or other React frameworks
• Knowledge of testing frameworks (Jest, Cypress, etc.)
• Familiarity with cloud platforms (AWS, GCP, Azure)
• Experience with GraphQL and REST APIs`,
    benefits: [
      'Health, dental, and vision insurance',
      'Flexible PTO policy',
      'Remote work options',
      '$2,000 professional development budget',
      'Stock options',
      'Free lunch and snacks'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/jobs" className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={mockJob.logo} 
                      alt={mockJob.company} 
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {mockJob.title}
                      </h1>
                      <Link 
                        to={`/companies/${mockJob.company.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-xl text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        {mockJob.company}
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {mockJob.type}
                  </Badge>
                </div>

                <div className="flex items-center space-x-6 mb-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{mockJob.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Posted {mockJob.postedTime}</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {mockJob.salary}
                  </div>
                </div>

                <div className="prose max-w-none">
                  <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {mockJob.fullDescription}
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">Benefits & Perks</h2>
                  <ul className="space-y-2">
                    {mockJob.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <Button className="w-full mb-4" size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" className="w-full mb-6">
                  Save Job
                </Button>
                
                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">About {mockJob.company}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    TechCorp is a leading technology company focused on building innovative software solutions. 
                    We're committed to creating a diverse and inclusive workplace where everyone can thrive.
                  </p>
                  <Link 
                    to={`/companies/${mockJob.company.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View Company Profile →
                  </Link>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h3 className="font-semibold mb-4">Job Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Employment Type</span>
                      <span className="font-medium">{mockJob.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location</span>
                      <span className="font-medium">{mockJob.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Salary Range</span>
                      <span className="font-medium">{mockJob.salary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Posted</span>
                      <span className="font-medium">{mockJob.postedTime}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
