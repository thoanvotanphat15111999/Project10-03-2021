using pjModels;
using System;
using pjDataAccess;
using System.Collections.Generic;

namespace pjBusiness
{
    public class service
    {
        private ProjectDAL pdal;
        private JobDAL jdal;

        public service(DataContext _context)
        {
            pdal = new ProjectDAL(_context);
            jdal = new JobDAL(_context);
        }
        // BUSINESS PROJECT
        public ICollection<Project> GetallProject()
        {
            try
            {
                ICollection<Project> listp = pdal.getall();
                return listp;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

    }
}
