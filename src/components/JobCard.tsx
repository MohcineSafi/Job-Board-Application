
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Briefcase } from 'lucide-react';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    description: string;
    postedTime: string;
    logo?: string;
  };
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardContent className="p-6">
        <Link to={`/jobs/${job.id}`}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                {job.logo ? (
                  <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg object-cover" />
                ) : (
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                    {job.title}
                  </h3>
                  <Link to={`/companies/${job.company.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600 hover:text-blue-600">
                    {job.company}
                  </Link>
                </div>
              </div>
              
              <p className="text-gray-600 mb-3 line-clamp-2">
                {job.description}
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{job.postedTime}</span>
                </div>
              </div>
            </div>
            
            <div className="ml-4 text-right">
              <Badge variant="secondary" className="mb-2">
                {job.type}
              </Badge>
              <p className="text-lg font-semibold text-gray-900">{job.salary}</p>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default JobCard;
