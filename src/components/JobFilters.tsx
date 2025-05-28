
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, MapPin, Filter } from 'lucide-react';

interface JobFiltersProps {
  onFiltersChange: (filters: any) => void;
}

const JobFilters = ({ onFiltersChange }: JobFiltersProps) => {
  const [location, setLocation] = useState('');
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState('');

  const jobTypeOptions = [
    'Full-time',
    'Part-time',
    'Contract',
    'Remote',
    'Internship'
  ];

  const salaryRanges = [
    '$0 - $50k',
    '$50k - $100k',
    '$100k - $150k',
    '$150k+'
  ];

  const handleJobTypeChange = (type: string, checked: boolean) => {
    const updatedTypes = checked 
      ? [...jobTypes, type]
      : jobTypes.filter(t => t !== type);
    setJobTypes(updatedTypes);
    onFiltersChange({ location, jobTypes: updatedTypes, salaryRange });
  };

  const handleLocationChange = (value: string) => {
    setLocation(value);
    onFiltersChange({ location: value, jobTypes, salaryRange });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="text-sm font-medium mb-2 block">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Enter location..."
              value={location}
              onChange={(e) => handleLocationChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-3 block">Job Type</label>
          <div className="space-y-2">
            {jobTypeOptions.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={type}
                  checked={jobTypes.includes(type)}
                  onCheckedChange={(checked) => handleJobTypeChange(type, checked as boolean)}
                />
                <label htmlFor={type} className="text-sm cursor-pointer">
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-3 block">Salary Range</label>
          <div className="space-y-2">
            {salaryRanges.map((range) => (
              <div key={range} className="flex items-center space-x-2">
                <Checkbox
                  id={range}
                  checked={salaryRange === range}
                  onCheckedChange={(checked) => setSalaryRange(checked ? range : '')}
                />
                <label htmlFor={range} className="text-sm cursor-pointer">
                  {range}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => {
            setLocation('');
            setJobTypes([]);
            setSalaryRange('');
            onFiltersChange({ location: '', jobTypes: [], salaryRange: '' });
          }}
        >
          Clear Filters
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobFilters;
