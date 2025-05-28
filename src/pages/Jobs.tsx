
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Header from '@/components/Header';
import JobCard from '@/components/JobCard';
import JobFilters from '@/components/JobFilters';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});

  // Mock data - replace with real data later
  const mockJobs = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'We are looking for a Senior Frontend Developer to join our dynamic team. You will be responsible for building user-facing features using React and TypeScript.',
      postedTime: '2 days ago',
      logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: '2',
      title: 'Product Manager',
      company: 'InnovateLabs',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k - $140k',
      description: 'Join our product team to drive the vision and strategy for our cutting-edge software products. Experience with agile methodologies required.',
      postedTime: '1 week ago',
      logo: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: '3',
      title: 'UX Designer',
      company: 'DesignStudio',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$80k - $110k',
      description: 'Create exceptional user experiences for our digital products. Strong portfolio in mobile and web design required.',
      postedTime: '3 days ago',
      logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      company: 'CloudTech',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110k - $150k',
      description: 'Manage and optimize our cloud infrastructure. Experience with AWS, Docker, and Kubernetes preferred.',
      postedTime: '5 days ago',
      logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: '5',
      title: 'Data Scientist',
      company: 'DataCorp',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$130k - $170k',
      description: 'Analyze complex datasets to drive business insights. PhD in Computer Science or related field preferred.',
      postedTime: '1 day ago',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Dream Job</h1>
          <div className="flex space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button>Search</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <JobFilters onFiltersChange={setFilters} />
          </div>
          
          <div className="lg:col-span-3">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">{mockJobs.length} jobs found</p>
              <select className="border rounded-md px-3 py-2 text-sm">
                <option>Sort by: Most Recent</option>
                <option>Sort by: Salary (High to Low)</option>
                <option>Sort by: Salary (Low to High)</option>
              </select>
            </div>
            
            <div className="space-y-4">
              {mockJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
