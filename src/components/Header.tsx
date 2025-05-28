
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Briefcase } from 'lucide-react';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">JobBoard</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <nav className="flex items-center space-x-4">
            <Link to="/jobs" className="text-gray-600 hover:text-gray-900">
              Jobs
            </Link>
            <Link to="/companies" className="text-gray-600 hover:text-gray-900">
              Companies
            </Link>
            <Button variant="outline">Sign In</Button>
            <Button>Post Job</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
