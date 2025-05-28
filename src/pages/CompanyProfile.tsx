
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Globe, Calendar, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import JobCard from '@/components/JobCard';

const CompanyProfile = () => {
  const { company } = useParams();

  // Mock data - replace with real data later
  const mockCompany = {
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=200&fit=crop&crop=center',
    coverImage: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=400&fit=crop&crop=center',
    description: 'TechCorp is a leading technology company focused on building innovative software solutions that transform how businesses operate. Founded in 2015, we have grown to become a trusted partner for companies worldwide, helping them leverage cutting-edge technology to achieve their goals.',
    location: 'San Francisco, CA',
    website: 'https://techcorp.com',
    employees: '500-1000',
    founded: '2015',
    industry: 'Technology',
    mission: 'To empower businesses through innovative technology solutions that drive growth and efficiency.',
    culture: 'We believe in fostering a collaborative, inclusive environment where creativity and innovation thrive. Our team is passionate about technology and committed to continuous learning and growth.'
  };

  const mockJobs = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'We are looking for a Senior Frontend Developer to join our dynamic team.',
      postedTime: '2 days ago',
      logo: mockCompany.logo
    },
    {
      id: '6',
      title: 'Backend Engineer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$130k - $170k',
      description: 'Join our backend team to build scalable server-side applications.',
      postedTime: '1 week ago',
      logo: mockCompany.logo
    },
    {
      id: '7',
      title: 'Product Designer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$100k - $140k',
      description: 'Design intuitive user experiences for our enterprise software products.',
      postedTime: '3 days ago',
      logo: mockCompany.logo
    }
  ];

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

        {/* Company Header */}
        <Card className="mb-8">
          <div 
            className="h-48 bg-cover bg-center rounded-t-lg"
            style={{ backgroundImage: `url(${mockCompany.coverImage})` }}
          >
            <div className="h-full bg-black bg-opacity-40 rounded-t-lg"></div>
          </div>
          
          <CardContent className="p-8">
            <div className="flex items-start space-x-6 -mt-16 relative">
              <img 
                src={mockCompany.logo} 
                alt={mockCompany.name}
                className="w-24 h-24 rounded-lg border-4 border-white bg-white object-cover"
              />
              
              <div className="flex-1 mt-12">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {mockCompany.name}
                    </h1>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{mockCompany.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{mockCompany.employees} employees</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Founded {mockCompany.founded}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Button variant="outline">
                      <Globe className="h-4 w-4 mr-2" />
                      Visit Website
                    </Button>
                    <Button>Follow Company</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">About</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {mockCompany.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-900">Industry:</span>
                    <span className="ml-2 text-gray-700">{mockCompany.industry}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Company Size:</span>
                    <span className="ml-2 text-gray-700">{mockCompany.employees}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Founded:</span>
                    <span className="ml-2 text-gray-700">{mockCompany.founded}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Mission & Culture</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-700 text-sm">
                      {mockCompany.mission}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Our Culture</h3>
                    <p className="text-gray-700 text-sm">
                      {mockCompany.culture}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Open Positions */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Open Positions ({mockJobs.length})
              </h2>
              <Button variant="outline">View All Jobs</Button>
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

export default CompanyProfile;
